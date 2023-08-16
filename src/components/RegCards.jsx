import React from 'react'
import RegCard from './RegCard'
import { regions } from '../constants'

const RegCards = () => (
    <div className='flex flex-col mt-[70px] mx-[15px] lg:mx-[100px] items-center'>
        <ul className='flex md:flex-row flex-col justify-between w-full'>
            {regions.map((index) => (
                <li key={index.title} className='mb-[30px]'>
                    <RegCard {...index} />
                </li>
            ))}
        </ul>



    </div>
)

export default RegCards