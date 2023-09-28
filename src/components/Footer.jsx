import React from 'react'
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
    return (
    <footer className="flex items-center justify-between bg-white">
        <h3 className="logo text-secondary font-bold">
            <span className='text-primary'>Sushi</span>man
        </h3>

        <ul className="hidden lg:flex items-center gap-x-10 text-secondary uppercase font-semibold">
            <li className='hover:text-primary'><a href="#menu">Menu</a></li>
            <li className='hover:text-primary'><a href="#food">Food</a></li>
            <li className='hover:text-primary'><a href="#services">Services</a></li>
            <li className='hover:text-primary'><a href="#about-us">About Us</a></li>
        </ul>

        <ul className="flex items-center gap-x-2 xs:gap-x-6 pr-5">
            <li className="h-6 w-6 xs:h-10 xs:w-10 grid place-items-center bg-secondary rounded-full cursor-pointer hover:translate-y-[-5px] transition-all"><img className='w-3 h-3' src={facebook} alt="facebook" /></li>
            <li className="h-6 w-6 xs:h-10 xs:w-10 grid place-items-center bg-secondary rounded-full cursor-pointer hover:translate-y-[-5px] transition-all"><img className='w-3 h-3' src={instagram} alt="instagram" /></li>
            <li className="h-6 w-6 xs:h-10 xs:w-10 grid place-items-center bg-secondary rounded-full cursor-pointer hover:translate-y-[-5px] transition-all"><img className='w-3 h-3' src={twitter} alt="twitter" /></li>
        </ul>
    </footer>
    )
}

export default Footer