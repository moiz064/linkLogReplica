import React from 'react'
import { aboutUsinfo as info } from '../constants'

const AboutUs = () => {
    return (
        <div className='flex flex-col sm:flex-row text-sm sm:text-xl justify-center'>
            <div className='flex-1 border-t-[3px] border-black py-[10px] mb-[10px] mx-[10px] sm:max-w-[400px]'>
                <h1 className='mb-[8px] tracking-widest sm:font-semibold'>{info[0].title}</h1>
                <h2 className='mb-[8px]'>{info[0].address}</h2>
                <div className='flex '>
                    <h2 className='mb-[8px] font-extrabold'>TEL</h2>
                    <h2 className='mb-[8px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[0].phNo}</h2>
                </div>
                <div className='flex'>
                    <h2 className='mb-[8px] font-extrabold'>FAX</h2>
                    <h2 className='mb-[8px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[0].fax}</h2>
                </div>
            </div>

            <div className='flex-1 border-t-[3px] border-black py-[10px] mb-[10px] mx-[10px] sm:max-w-[400px]'>
                <h1 className='mb-[8px] tracking-widest sm:font-semibold'>{info[1].title}</h1>
                <h2 className='mb-[8px]'>{info[1].desc}</h2>
                <div className='flex'>
                    <h2 className='mb-[8px] mr-[2px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[1].email1}</h2>
                    <h2>or</h2>
                </div>
                <div className='flex'>
                    <h2 className='mb-[8px] mr-[2px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[1].email2}</h2>
                    <h2>.</h2>
                </div>
            </div>

            <div className='flex-1 border-t-[3px] border-black py-[10px] mb-[10px] mx-[10px] sm:max-w-[400px]'>
                <h1 className='mb-[8px] tracking-widest sm:font-semibold'>{info[2].title}</h1>
                <h2 className='mb-[8px]'>{info[2].desc}</h2>
            </div>

        </div>
    )
}

export default AboutUs