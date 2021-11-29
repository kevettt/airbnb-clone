import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard"

const Search = ({searchResults}) => {
    console.log(searchResults);

    const router = useRouter();
    const{location,startDate,endDate,numberOfGuest}=router.query

    const formatedStartDate= format(new Date(startDate),"dd MMMM yy")
    const formatedEndDate= format(new Date(endDate),"dd MMMM yy")

    const range = `${formatedStartDate}- ${formatedEndDate}`

    const tickets=[
        'Cancellation Flexibility',
        'Type of Places',
        'Price',
        'Rooms and Beds',
        'More filters'
    ]

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuest}`}/>

            <main className='
                flex
            '>
                <section className='
                    flex-grow 
                    pt-14
                    px-6
                '>
                    <p className='
                        text-xs
                    '>
                        300+ Stays - {range} - for {numberOfGuest} guests
                    </p>
                    <h1 className='
                        text-3xl 
                        font-semibold
                        mt-2
                        mb-6
                    '>
                        Stays in {location}
                    </h1>

                    {
                        tickets.map(tiket =>(

                            <div 
                                key={tiket}
                                className='
                                hidden
                                md:inline-flex
                                m-1
                                text-gray-400
                                whitespace-nowrap
                            '>
                                <p className='
                                    px-4
                                    py-2
                                    border rounded-full
                                    cursor-pointer
                                    hover:shadow-lg
                                    active:scale-95
                                    active:bg-gray-100
                                    transition
                                    duration-100
                                    transform
                                    easy-out
                                '>
                                    {tiket}
                                </p>
                            </div>
                        ))
                    }


                    <div className='
                        flex
                        flex-col
                    '>
                        {
                            searchResults.map(item =>(
                                <InfoCard 
                                    key={item.img}
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    description={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }
                    </div>

                </section>

            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){

    const searchResults = await fetch(`https://links.papareact.com/isz`).
    then(res => res.json());

    return{
        props:{
            searchResults,
        }
    }

}
