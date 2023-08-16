import React from 'react'
import { background, herovideo } from '../assets'

const Hero = () => (
  <div className='relative flex mx-[15px]'
  >
    <div className='rounded-bl-[120px] overflow-hidden w-full h-[400px] sm:h-[800px] md:h-[580px] lg:h-[800px]'>
      <video className='h-full w-full object-cover' src={herovideo} autoPlay loop muted ></video>

    </div>
    <div className='absolute bottom-[25%] left-[5%] lg:left-[7%]'>
      <h1 className='text-2xl sm:text-6xl  text-white'>We see the future of logistics <br className='hidden lg:flex' /> through development</h1>
      <button className='px-[15px] sm:px-[30px] py-[8px] sm:py-[10px] text-[10px] sm:text-[16px] xl:text-xl bg-[#eb6547] mt-4 rounded-tr-[20px] sm:rounded-tr-[30px] tracking-widest font-semibold sm:font-normal'>VIEW OUR PORTFOLIO</button>
    </div>
  </div>
)

export default Hero