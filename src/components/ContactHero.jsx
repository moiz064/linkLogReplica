import React from 'react'
import { conPic1 } from '../assets'

const ContactHero = () => {
  return (
    <div className='px-[15px] pt-[80px] sm:pt-[120px] lg:mx-[110px] x:mx-[380px]'>
        <div className='flex overflow-hidden h-[160px] sm:h-[370px] md:h-[390px]  border-[2px] border-[#cfb380] rounded-bl-[100px]'>
        <img src={conPic1} alt="Picture not Found" 
            className='object-cover h-full w-full'
        />
    </div>
    </div>
    
  )
}

export default ContactHero