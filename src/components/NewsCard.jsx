import React from 'react'
import Card from './card'
import { news } from '../constants'

const NewsCard = () => (
  <div className='mx-[10%] mt-[70px]'>


    <h1 className=' text-5xl font-medium'>
      Latest News</h1>

    <div className='flex items-center my-8'>
        <ul className='flex md:flex-row flex:col overflow-hidden'>
          {news.map((index) => (
            <li>
              <Card {...index} />
            </li>
          ))}
        </ul>



    </div>

  </div>
)

export default NewsCard