import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import MostCopulerCategory from '../Most-populer-category/Most-populer-category'
import BestSaller from '../BestSaller/BestSaller'
function Home() {
    return (
        <>
        <Banner/>
        <About/>
        <BestSaller/> 
        <MostCopulerCategory/>
        </>
    )
}

export default Home