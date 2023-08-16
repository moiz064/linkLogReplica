import React from 'react'
import { regionData } from '../constants'

const ConRegions = () => (
    <div className=' font-poppins mx-[15px] lg:mx-[110px]'>
        {regionData.map((region) => (
            <div className='border-t-[2px] border-black pt-[10px] mt-[50px] text-[11px]'>
                <h1 className='tracking-widest sm:text-[16px] sm:font-medium'>{region.title}</h1>
                <div className='sm:flex flex-col items-center'>
                    <ul className='w-full'>
                        <div className='sm:grid grid-cols-3 sm:text-[16px] gap-x-[20px] w-full'>
                            {region.locations.map((loc) => (
                                <li>
                                    <div className='mt-[20px]'>
                                        <h2 className='font-bold'>{loc.name}</h2>
                                        <p>{loc.address1}</p>
                                        <p>{loc.address2}</p>
                                    </div>
                                </li>

                            ))}
                        </div>

                    </ul>
                </div>

            </div>


        ))}
    </div>
)

export default ConRegions