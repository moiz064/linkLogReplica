import React from 'react'
import Card from './Card'
import { news } from '../constants'

const NewsCard = () => (
  <div className='flex flex-col mt-[70px] mx-[50px] lg:mx-[150px]'>

    <h1 className='text-lg md:text-4xl font-medium mb-4'>
      Latest News
    </h1>

    <div className='flex flex-col items-center'>
      <ul className='flex md:flex-row flex-col justify-between w-full'>
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