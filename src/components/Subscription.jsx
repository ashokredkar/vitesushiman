import React from 'react'

const Subscription = () => {
    return (
        <section className='bg-primary p-8 xs:p-12 lg:p-24 text-center' id="services">
        <h2 data-aos="flip-down" className='section-heading text-white'>
            Get offers straight <br />
            to your inbox
        </h2>
        <p data-aos="fade-up" className='section-text text-[#ffffff]'>Sign up for the Sushiman newsletter</p>

        <div className="p-2 border-0 xs:border border-[#ffffff60] rounded-full w-full md:w-[60%] mx-auto mt-10 flex flex-col xs:flex-row items-center gap-x-4" data-aos="fade-up">
            <input className='input bg-transparent text-white placeholder:text-[#ffffff60]' type="text" placeholder="Enter your email address"/>
            <button className='btn justify-center bg-secondary text-white w-full mt-3 xs:mt-0 xs:w-max'>Get Started</button>
        </div>
        </section>
    )
}

export default Subscription