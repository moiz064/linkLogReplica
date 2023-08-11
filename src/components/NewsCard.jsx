import React from 'react'
import Card from './Card'
import { news } from '../constants'

const NewsCard = () => (
  <div className=' mt-[70px]'>


  <h1 className='flex self-start text-2xl lg:text-4xl font-medium ml-[100px] mb-4'>
    Latest News</h1>

  <div className='flex flex-col items-center'>
      <ul className='flex lg:flex-row flex-col '>
        {news.map((index) => (
          <li key={index.title} className='mb-[30px]'>
            <Card {...index} />
          </li>
        ))}
      </ul>



  </div>

</div>
)

export default NewsCard