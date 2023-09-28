import React from 'react'
import sushi2 from "../assets/sushi-2.png"
import sushi3 from "../assets/sushi-3.png"
import arrow from "../assets/arrow-up-right.svg"

const About = () => {
    return (
        <section id="about-us" className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-[45%] flex flex-col gap-y-2 relative">
            <div className="w-full bg-white h-[49.5%] px-12 py-16 grid place-items-center">
                <img src={sushi3} alt="sushi" data-aos="fade-right" className='w-48' />
            </div>

            <a href='#food' className="btn rounded-tr-none rounded-br-none bg-secondary text-white px-8 absolute right-0 top-[50%] translate-y-[-20%]">
                Learn More <img src={arrow} alt="learn more" />
            </a>

            <div className="w-full bg-white h-[49.5%] px-12 py-16 grid place-items-center">
                <img src={sushi2} alt="sushi"  data-aos="fade-right" className='w-48' />
            </div>
        </div>

        <div className="w-full sm:w-[55%] px-10 py-14 sm:py-0" data-aos="fade-left">
            <p className="sub-heading">About Us / 私たちに関しては</p>
            <h3 className="section-heading">Our mission is to bring true Japanese flavours to you.</h3>
            <p className="section-text">We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.
            </p>
        </div>
        </section>
    )
}

export default About