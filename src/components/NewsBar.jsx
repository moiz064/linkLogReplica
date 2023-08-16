import React from 'react'
import { news } from '../constants'

const NewsBar = () => {
    return (
        <div className='my-[40px] mx-[15px] lg:mx-[110px] bg-[#252429] py-[20%] sm:py-[10%] xl:mx-[200px] px-[10%] sm:px-[5%] text-[#cfb380] rounded-br-[150px] relative'>
            <h1 className='text-3xl sm:text-5xl mb-[15px]'>Latest News</h1>
            <div className='mb-[30px] sm:flex'>
                {news.map((index) => (
                    <div className='flex-1 border-t-[3px] border-orange-600 pt-[15px] mt-[20px] sm:mx-[10px] text-[14px]'>
                        <h2 className='text-orange-600 mb-[5px]'>NEWS</h2>
                        <h2 className='sm:text-2xl font-semibold'>{index.title}</h2>
                    </div>
                ))}
            </div>

            <a className='absolute md:top-[15%] md:right-[5%] border-b-[1px] hover:border-none border-[#cfb380] md:border-orange-600 text-[11px] md:text-lg md:text-orange-600 font-bold'>SEE ALL NEWS</a>

        </div>
    )
}

export default NewsBar