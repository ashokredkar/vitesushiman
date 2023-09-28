import React, { useState } from 'react'
import search from "../assets/search.svg"
import menu from "../assets/menu.svg"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='h-[67px]'>
        <nav className="flex items-center justify-between bg-creamson">
            <h4 className='logo w-[45%] bg-creamson sm:bg-primary text-primary sm:text-creamson'>Sushiman</h4>

            <ul className="w-[55%] items-center justify-end font-jakarta gap-x-12 hidden lg:flex" data-aos="fade-down">
                <li className='text-black-300 hover:text-black-500'><a href="#about-us" onClick={() => setOpen(false)}>About Us</a></li>
                <li className='text-black-300 hover:text-black-500'><a href="#menu" onClick={() => setOpen(false)}>Menu</a></li>
                <li className='text-black-300 hover:text-black-500'><a href="#food" onClick={() => setOpen(false)}>Food</a></li>
                <li className='text-black-300 hover:text-black-500'><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                <li className='cursor-pointer'><img src={search} alt="search" /></li>
            </ul>

            <ul className="ml-auto block lg:hidden pr-5 sm:pr-0">
                <li className='cursor-pointer text-xl text-secondary' onClick={() => setOpen(true)}><HiOutlineMenuAlt4 /></li>
                <ul className={`grid place-items-center fixed z-20 bottom-0 top-0 ${open ? "right-0" : "right-[-100%]"} h-screen w-screen sm:w-1/2 bg-primary transition-all`}>
                    <div className='flex flex-col gap-y-4 text-2xl font-semibold text-[#ffffff90]'>
                        <li className='hover:text-white'><a href="#about-us" onClick={() => setOpen(false)}>About Us</a></li>
                        <li className='hover:text-white'><a href="#menu" onClick={() => setOpen(false)}>Menu</a></li>
                        <li className='hover:text-white'><a href="#food" onClick={() => setOpen(false)}>Food</a></li>
                        <li className='hover:text-white'><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                    </div>
                    <span className='absolute top-6 right-5 text-xl text-[#ffffff80] hover:text-white cursor-pointer' onClick={() => setOpen(false)}><AiOutlineClose /></span>
                </ul>
            </ul>
        </nav>
        </header>
    )
}

export default Header