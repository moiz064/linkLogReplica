import React from 'react'
import Card from './Card'
import { news } from '../constants'

const NewsCard = () => (

  <div className='flex justify-center'>
    <div className='flex flex-col mt-[70px] mx-[50px] sm:mx-[100px] md:mx-[15px] lg:mx-[100px] lg:w-[992px] '>

      <h1 className='text-lg md:text-4xl font-medium mb-4'>
        Latest News
      </h1>

      <div className='flex flex-col items-center '>
        <ul className='flex justify-center w-full '>
          <div className='grid grid-cols-1 w-full grid-rows-3 md:grid-col-3 md:grid-rows-1 grid-flow-col gap-[5px] md:gap-x-[30px] justify-items-center'>
            {news.map((index) => (
              <li key={index.title} className='mb-[30px]'>
                <Card {...index} />
              </li>
            ))}
          </div>

        </ul>
      </div>

    </div>
  </div>


)

export default NewsCard