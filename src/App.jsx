import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsCard from './components/NewsCard'
import Connections from './components/Connections'
import LinkReport from './components/LinkReport'
import Banners from './components/Banners'
import Stats from './components/Stats'
import RegCards from './components/RegCards'
import Info from './components/Info'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <NewsCard />
      <Connections />
      <LinkReport />
      <Banners />
      <Stats />
      <RegCards />
      <Info />
    </div>
  )
}

export default App