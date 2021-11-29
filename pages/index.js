import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData,CardsData}) {
  
  return (
    <div className="">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Banner/>

      <main className='
        max-w-7xl
        mx-auto
        p-8
        sm:px-16
      '>
        <section className='
          pt-6
        '>
          <h2 className='
            text-4xl
            font-semibold
            pb-5
          '>
            Explore Nearby
          </h2>

          {/* pull some data from the server API-endpoint */}

          <div className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          ">
            {
              exploreData?.map(item =>(
                <SmallCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              ))
            }
          </div>

        </section>

        <section>
            <h2 className='
              text-4xl
              font-semibold
              py-5
            '>
              Live anywhere
            </h2>

            <div className='
              flex
              space-x-3
              overflow-scroll
              scrollbar-hide
              p-3
              -ml-3
            '>
              {
                CardsData?.map(item =>(
                  <MediumCard
                    key={item.img}
                    img={item.img}
                    title={item.title}
                  />
                ))
              }
            </div>
        </section>

        <section>
              <LargeCard
                img='https://links.papareact.com/4cj'
                title='The Greaters Outdoors'
                description='Wishlists curated by Airbnb'
                buttonText='Get Inspired'
              />
        </section>

      </main>

      <Footer/>

    </div>
  )
}

//REST API CONNEXION

export async function getStaticProps(){
  //Data about Explore Nearby
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  )

  //Data about Live anywhere
  const CardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  )
  return{
    props:{
      exploreData,
      CardsData
    }
  }
}
