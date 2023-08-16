import React from 'react'
import { aboutUsinfo as info } from '../constants'

const AboutUs = () => {
    return (
        <div className='flex flex-col sm:flex-row text-sm sm:text-xl font-poppins justify-center mt-[25px] sm:mt-[50px] mx-[15px] lg:mx-[160px]'>
            <div className='flex-1 border-t-[2px] border-black py-[10px] mb-[10px]  sm:max-w-[400px] text-[12px] sm:text-[16px]'>
                <h1 className='mb-[6px] tracking-widest sm:font-semibold text-[10.5px] sm:text-[16px]'>{info[0].title}</h1>
                <h2 className=''>{info[0].address1}</h2>
                <h2 className='mb-[6px]'>{info[0].address2}</h2>
                <div className='flex '>
                    <h2 className='mb-[6px] font-extrabold'>TEL</h2>
                    <h2 className='mb-[6px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[0].phNo}</h2>
                </div>
                <div className='flex'>
                    <h2 className='mb-[6px] font-extrabold'>FAX</h2>
                    <h2 className='mb-[6px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[0].fax}</h2>
                </div>
            </div>

            <div className='flex-1 border-t-[2px] border-black py-[10px] mb-[10px] mx-[10px] sm:max-w-[400px] text-[12px] sm:text-[16px]'>
                <h1 className='mb-[6px] text-[10.5px] sm:text-[16px] tracking-widest sm:font-semibold'>{info[1].title}</h1>
                <h2 className='mb-[6px]'>{info[1].desc}</h2>
                <div className='flex'>
                    <h2 className='mb-[6px] mr-[2px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[1].email1}</h2>
                    <h2>or</h2>
                </div>
                <div className='flex'>
                    <h2 className='mb-[6px] mr-[2px] border-b-[1px] border-black hover:border-none  hover:text-orange-800'>{info[1].email2}</h2>
                </div>
            </div>

            <div className='flex-1 border-t-[2px] text-[12px] sm:text-[16px] border-black py-[10px] mb-[10px] mx-[10px] sm:max-w-[400px]'>
                <h1 className='mb-[6px] text-[10.5px] sm:text-[16px] tracking-widest sm:font-semibold'>{info[2].title}</h1>
                <h2 className='mb-[6px]'>{info[2].desc}</h2>
            </div>

        </div>
    )
}

export default AboutUs