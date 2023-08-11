import React from 'react'
import RegCard from './RegCard'
import { regions } from '../constants'

const RegCards = () => (
    <div className='flex flex-col items-center mt-[70px]'>
        <ul className='flex lg:flex-row flex-col '>
            {regions.map((index) => (
                <li key={index.title} className='mb-[30px]'>
                    <RegCard {...index} />
                </li>
            ))}
        </ul>



    </div>
)

export default RegCards