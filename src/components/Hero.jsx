import React from 'react'
import { background } from '../assets'

const Hero = () => (
    <div className='flex mx-[3%] h-[720px] rounded-bl-[100px]'
        style={{backgroundImage: `url(${background})`}}
    >
    <div className='mt-[20%] ml-[17%]'>
    <h1 className='text-6xl text-white'>We see the future of logistics <br /> through development</h1>
    <button className='h-14 w-80 bg-[#eb6547] mt-4 rounded-tr-[25px] tracking-widest text-xl'>View our portfolio</button>    
    </div>
    </div>
  )

export default Hero