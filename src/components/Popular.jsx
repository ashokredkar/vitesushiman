import React, { useState } from 'react'
import sushi6 from "../assets/sushi-6.png"
import sushi7 from "../assets/sushi-7.png"
import sushi8 from "../assets/sushi-8.png"
import sushi9 from "../assets/sushi-9.png"
import sushi10 from "../assets/sushi-10.png"
import sushi11 from "../assets/sushi-11.png"
import sushi12 from "../assets/sushi-12.png"
import arrow from "../assets/arrow-right.svg"
import star from "../assets/star.svg"

const Popular = () => {
    const tabs = [{title: "All"}, {title: "Sushi", icon: sushi9}, {title: "Ramen", icon: sushi8}, {title: "Udon", icon: sushi7}, {title: "Danggo", icon: sushi6}, {title: "Others"}];
    const popularItems = [{img: sushi12, title: "Chezu Sushi", rating: "4.8", price: "16.00"}, {img: sushi11, title: "Originale Sushi", rating: "4.5", price: "21.00"}, {img: sushi10, title: "Ramen Legendo", rating: "4.7", price: "24.00"}];
    const [activeTab, setActiveTab] = useState("All");

    return (
        <section id="menu" className="bg-primary p-8 sm:p-12 lg:p-24 text-center">
        <h2 className="section-heading text-white" data-aos="flip-up">Popular Food / 人気</h2>

        <div className="flex items-center flex-wrap xl:flex-nowrap justify-center gap-x-4 my-10" data-aos="fade-up">
            {tabs.map(item => (
                <button key={item.title} className={`flex items-center gap-x-2 py-3 px-6 border rounded-full mb-4 hover:shadow-xl transition-all ${item.title == activeTab ? "bg-white text-primary" : "bg-trans text-white"}`} onClick={() => setActiveTab(item.title)}>
                    { item.icon && <img src={item.icon} alt={item.title} className='w-8' />} {item.title}
                </button>
            ))}
        </div>

        <div className="flex items-end gap-x-4 lg:gap-x-10 justify-center flex-wrap lg:flex-nowrap" data-aos="fade-up">
            {popularItems.map(item => (
                <article key={item.title} className="group btn py-8 px-5 flex-col bg-trans text-white hover:bg-white hover:text-primary hover:scale-110 rounded-2xl min-w-[200px] lg:w-[25%] cursor-pointer mb-4">
                    <img className="w-28 h-20 group-hover:scale-125 mb-8 transition-all" src={item.img} alt={item.title} />
                    <h4 className="text-xl font-semibold font-playfair mb-4">{item.title}</h4>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                            <img src={star} alt="star" />
                            <p>{item.rating}</p>
                        </div>

                        <p className="popular-foods__card-price">${item.price}</p>
                    </div>
                </article>
            ))}
        </div>

        <button className="btn bg-secondary text-white mt-12 mx-auto">
            Explore Food <img src={arrow} alt="arrow-right" className='w-5' />
        </button>
        </section>
    )
}

export default Popular