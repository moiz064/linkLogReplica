import React from 'react'
import { stats } from '../constants'

const Stats = () => {
    return (
        <div className='w-full  bg-[#fae7be] my-[50px] px-[30px] lg:px-[100px] py-[10px] sm:py-[90px]'>
            <h1 className='text-3xl sm:text-5xl font-light mb-[50px]'>Link Logistics by the numbers</h1>

            <div className='w-full flex flex-col sm:flex-row justify-center'>

                {stats.map((stat, index) => (
                    
                    <div className={`text-center border-black py-[20px] px-[30px] ${index !== stats.length - 1 ?  'sm:border-r-[3px]': ' sm:border-r-[0px]'}`}>
                        <h1 className='text-5xl lg:text-7xl font-light mb-[20px]'>
                            {stat.stat}
                        </h1>
                        <p className={`text-sm lg:text-base font-normal ${index !== stats.length - 1 ?  'sm:mb-[20px]': ' sm:mb-[0px]'}`}>
                            {stat.title}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Stats