const Footer = () => {
    return (
        <div>
            <div className='
                grid
                grid-cols-1
                md:grid-cols-4
                gap-y-10
                px-32
                py-14
                bg-gray-100
            '>
                {/* **** ABOUT *** */}
                <div className='
                    space-y-4
                    text-xs
                    text-gray-600
                '>
                    <h5 className="
                        font-bold
                        text-gray-800
                    ">
                        ABOUT
                    </h5>
                    <p>For Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>

                {/* **** COMMUNITY *** */}
                <div className='
                    space-y-4
                    text-xs
                    text-gray-600
                '>
                    <h5 className="
                        font-bold
                        text-gray-800
                    ">
                        COMMUNITY
                    </h5>
                    <p>Accessibility</p>
                    <p>This is not a real site</p>
                    <p>Its a pretty awesome clone</p>
                    <p>Referals accepted</p>
                    <p>KevinDev</p>
                </div>

                {/* **** HOST *** */}
                <div className='
                    space-y-4
                    text-xs
                    text-gray-600
                '>
                    <h5 className="
                        font-bold
                        text-gray-800
                    ">
                        HOST
                    </h5>
                    <p>React with NextJS</p>
                    <p>Presents</p>
                    <p>Full Stack Hero</p>
                    <p>Hundreds of Students</p>
                    <p>Join Now</p>
                </div>

                {/* **** SUPPORT *** */}
                <div className='
                    space-y-4
                    text-xs
                    text-gray-600
                '>
                    <h5 className="
                        font-bold
                        text-gray-800
                    ">
                        SUPPORT
                    </h5>
                    <p>Help centre</p>
                    <p>Trus & Safety</p>
                    <p>Say hi</p>
                    <p>Easter Eggs</p>
                    <p>For the win</p>
                </div>
                
            </div>
            <p className='
                text-xs
                text-gray-700
                text-center
                bg-gray-100
                pb-2
            '>
                Privacy Notice Interest-Based Ads &copy; 2020-2021, utp.edu.pe
            </p>
        </div>
    )
}

export default Footer
