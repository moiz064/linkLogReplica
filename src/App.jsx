import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsCard from './components/NewsCard'
import Connections from './components/Connections'
import LinkReport from './components/LinkReport'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <NewsCard />
      <Connections />
      <LinkReport />
    </div>
  )
}

export default App