import React from 'react'
import sushi4 from "../assets/sushi-4.png"
import sushi5 from "../assets/sushi-5.png"
import check from "../assets/check.svg"
// import vArrow from "../assets/arrow-vertical.svg"
// import hArrow from "../assets/arrow-horizontal.svg"

const Trending = () => {
    const sushiPoints = ["Make Sushi", "Nilgiri Sushi", "Oshizushi", "Temaki Sushi", "Uramaki Sushi", "Inari Sushi"];
    const drinksPoints = ["Oruncha", "Ofukuncha", "Sakura Tea", "Kombu-cha", "Aojiru", "Mugicha"];

    return (
        <section className="relative" id="food">
        <section className="flex flex-col-reverse xs:flex-row items-center">
            <div className="w-full xs:w-1/2 h-max xs:h-[500px] py-10 xs:py-0 grid place-items-center" data-aos="fade-right">
                <div className="w-[80%] xs:w-[70%]">
                    <p className="sub-heading">What’s Trending / トレンド</p>
            
                    <h3 className="section-heading">Japanese Sushi</h3>
                    <p className="section-text">Feel the taste of the most delicious Sushi here.
                    </p>
            
                    <ul className="flex flex-col md:flex-row items-center flex-wrap">
                        {sushiPoints.map((item, i) => (
                            <li key={i} className='flex items-center gap-x-2 mb-2 w-full md:w-[50%]'>
                                <div className="grid place-items-center h-6 w-6 rounded-full bg-primary">
                                    <img src={check} alt="check" />
                                </div>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    
            <div className="w-full xs:w-1/2 h-[250px] xs:h-[500px] grid place-items-center bg-white">
                <img src={sushi5} alt="sushi-5" data-aos="fade-left" className='w-40 sm:w-60' />
            </div>

        </section>

        <div className="btn min-w-max rounded-full p-0 h-24 w-24 sm:h-36 sm:w-36 grid place-items-center bg-secondary text-white uppercase absolute bottom-5 right-5 xs:top-[48%] xs:left-[50%] xs:translate-x-[-50%] xs:translate-y-[-50%] z-10">
            <p>Discover</p>
        </div>

        <section className="flex items-center flex-col xs:flex-row">
            <div className="w-full xs:w-1/2 h-[250px] xs:h-[500px] grid place-items-center bg-white relative">
                <img src={sushi4} alt="sushi-4" data-aos="fade-right" className='w-40 sm:w-60' />
            </div>

            <div className="w-full xs:w-1/2 h-max xs:h-[500px] grid py-10 xs:py-0 place-items-center" data-aos="fade-left">
                <div className="w-[80%] xs:w-[70%]">
                    <p className="sub-heading">What’s Trending / トレンド</p>
            
                    <h3 className="section-heading">Japanese Drinks</h3>
                    <p className="section-text">Feel the taste of the most delicious Japense drinks here.
                    </p>
            
                    <ul className="flex flex-col md:flex-row items-center flex-wrap">
                        {drinksPoints.map((item, i) => (
                            <li key={i} className='flex items-center gap-x-2 mb-2 w-full md:w-[50%]'>
                                <div className="grid place-items-center h-6 w-6 rounded-full bg-primary">
                                    <img src={check} alt="check" />
                                </div>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        </section>
    )
}

export default Trending