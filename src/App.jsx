import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Popular from './components/Popular'
import Trending from './components/Trending'
import Subscription from './components/Subscription'
import Footer from './components/Footer'
import Aos from 'aos'

export default function App() {
  Aos.init({
    duration: 1000,
    offset: 100
  });

  return (
    <div className="bg-creamson">
      <div className="w-full mx-auto sm:w-[95%] md:w-[90%] 2xl:w-[80%]">
        <Header />
        <Hero />
        <About />
        <Popular />
        <Trending />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}