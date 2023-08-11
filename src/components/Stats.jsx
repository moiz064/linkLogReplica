import React from 'react'
import { stats } from '../constants'

const Stats = () => {
    return (
        <div className='w-full  bg-[#fae7be] my-[50px] px-[30px] py-[10px] md:py-[90px]'>
            <h1 className='text-4xl md:text-5xl font-light mb-[50px]'>Link Logistics by the numbers</h1>

            <div className='w-full flex flex-col md:flex-row justify-center '>

                {stats.map((stat, index) => (
                    
                    <div className={`text-center border-black p-[20px] ${index !== stats.length - 1 ?  'md:border-r-[3px]': ' md:border-r-[0px]'}`}>
                        <h1 className='text-7xl font-light mb-[20px]'>
                            {stat.stat}
                        </h1>
                        <p className={`text-base font-normal ${index !== stats.length - 1 ?  'md:mb-[20px]': ' md:mb-[0px]'}`}>
                            {stat.title}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Stats