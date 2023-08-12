import React from 'react' 

import Hero from './Hero'
import NewsCard from './NewsCard'
import Connections from './Connections'
import LinkReport from './LinkReport'
import Banners from './Banners'
import Stats from './Stats'
import RegCards from './RegCards'
import Info from './Info'
import Footer from './Footer'
import NewsBar from './NewsBar'


const Home = () => {
    return (
        <div >
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