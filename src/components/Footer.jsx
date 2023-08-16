import React from 'react'
import {
    linklogogold,
    instagram,
    facebook,
    linkedin,
    twitter,
    youtube
} from '../assets'
import { navLinks } from '../constants'

const Footer = () => (
    <div className='bg-[#252429] px-[15px] lg:px-[200px] pt-[20px]'>
        <div className='sm:flex md:min-h-[400px] md:py-[15px]'>
            <div className='sm:flex md:flex-1 flex-col justify-between pt-[20px]'>

                <img src={linklogogold} alt="logo" className='w-[180px] md:w-[200px]' />

                <div className='flex mt-[20px] h-[40px]'>
                    <img src={linkedin} alt="logo" className='w-[20px] mr-[12px] md:mr-[25px]' />
                    <img src={facebook} alt="logo" className='w-[20px] mr-[12px] md:mr-[25px]' />
                    <img src={instagram} alt="logo" className='w-[20px] mr-[12px] md:mr-[25px]' />
                    <img src={twitter} alt="logo" className='w-[20px] mr-[12px] md:mr-[25px]' />
                    <img src={youtube} alt="logo" className='w-[20px]' />
                </div>

            </div>

            <div className='sm:w-full flex md:flex-1'>
                <ul className='w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-4 sm:grid-rows-2 grid-flow-col sm:pl-10 md:pl-0'>

                        {navLinks.map((link) => (
                            <li key={link.id}>

                                <div className='mb-2 mt-10'>
                                    <h1 className='text-[#cfb380] text-sm cursor-pointer'>{link.title}</h1>
                                </div>

                                <div className={`${link.subLinks.length == 0 ? 'hidden' : 'flex'}`}>
                                    <ul>
                                        {link.subLinks.map((sublink) => (
                                            <li key={link.id}>
                                                <h2 className='text-[#cfb380] text-sm cursor-pointer hover:text-white '>{sublink}</h2>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </li>
                        ))}
                    </div>
                </ul>
            </div>

        </div>

        <div className='border-t-[2px] border-[#cfb380] text-[#cfb380] flex text-xs relative w-full py-5'>
            <h3 className='mr-[60px]'>Privacy Policy</h3>
            <h3>Cookie Policy</h3>
            <h3 className='absolute right-0'>© 2023 Link</h3>
        </div>

    </div>
)
export default Footer