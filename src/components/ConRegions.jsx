import React from 'react'
import { regionData } from '../constants'

const ConRegions = () => (
    <div className='sm:px-[50px]'>
        {regionData.map((region) => (
            <div className='border-t-[3px] border-black mx-[10px] pt-[10px] mt-[50px]'>
                <h1 className='tracking-widest md:text-xl font-semibold'>{region.title}</h1>
                <div className='md:flex flex-col items-center'>
                    <ul>
                        <div className='md:grid grid-cols-3 md:text-2xl md:max-w-[900px]'>
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