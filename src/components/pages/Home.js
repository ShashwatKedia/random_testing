import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Stats from '../Stats'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Stats />
            <Cards />
        </>
    )
}

export default Home