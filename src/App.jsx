import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsCard from './components/NewsCard'
import Connections from './components/Connections'
import LinkReport from './components/LinkReport'
import Banners from './components/Banners'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <NewsCard />
      <Connections />
      <LinkReport />
      <Banners />
    </div>
  )
}

export default App