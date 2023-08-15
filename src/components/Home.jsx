import React from 'react'

import {
    Hero,
    NewsCard,
    Connections,
    LinkReport,
    Banners,
    Stats,
    RegCards,
    Info,
    Footer,
    NewsBar
} from '../components'


const Home = () => {
    return (
        <div className='bg-[#efefef] w-full'>
            <Hero />
            <NewsCard />
            <Connections />
            <LinkReport />
            <Banners />
            <Stats />
            <RegCards />
            <Info />
            <NewsBar />
            <Footer />
        </div>
    )
}

export default Home