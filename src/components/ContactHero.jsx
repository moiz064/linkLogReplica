import React from 'react'
import { conPic1 } from '../assets'

const ContactHero = () => {
  return (
    <div className='p-[5%] '>
        <div className='flex overflow-hidden h-[200px] sm:h-[500px] border-[3px] border-[#cfb380] rounded-bl-[100px]'>
        <img src={conPic1} alt="Picture not Found" 
            className='object-cover h-full w-full'
        />
    </div>
    </div>
    
  )
}

export default ContactHero