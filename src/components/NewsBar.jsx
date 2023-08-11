import React from 'react'
import { news } from '../constants'

const NewsBar = () => {
    return (
        <div className='m-[40px] mx-[50px] bg-[#252429] p-[10%] text-[#cfb380] rounded-br-[100px] relative'>
            <h1 className='text-4xl sm:text-6xl mb-[15px]'>Latest News</h1>
            <div className='mb-[30px] sm:flex'>
                {news.map((index) => (
                    <div className='flex-1 border-t-[3px] border-orange-600 pt-[15px] mt-[20px] sm:mx-[10px]'>
                        <h2 className='text-orange-600 mb-[5px]'>NEWS</h2>
                        <h2 className='sm:text-2xl font-semibold'>{index.title}</h2>
                    </div>
                ))}
            </div>

            <a className='absolute md:top-[15%] md:right-[5%] border-b-[1px] hover:border-none border-[#cfb380] md:border-orange-600 text-sm md:text-lg md:text-orange-600 font-bold'>SEE ALL NEWS</a>

        </div>
    )
}

export default NewsBar