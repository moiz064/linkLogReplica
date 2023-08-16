import React from 'react'
import RegCard from './RegCard'
import { regions } from '../constants'

const RegCards = () => (
    <div className='flex justify-center mt-[70px] mx-[15px] lg:mx-[110px]'>
        <div className='flex flex-col items-center'>
            <ul className='flex justify-center w-full'>
                <div className='grid grid-cols-1 w-full grid-rows-3 md:grid-col-3 md:grid-rows-1 grid-flow-col gap-[5px] md:gap-x-[30px] justify-items-center'>
                    {regions.map((index) => (
                        <li key={index.title} className='mb-[30px]'>
                            <RegCard {...index} />
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    </div>

)

export default RegCards