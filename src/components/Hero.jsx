import React from 'react'
import { background } from '../assets'

const Hero = () => (
  <div className='relative flex mx-[15px] h-[350px] sm:h-[450px] lg:h-[700px] rounded-bl-[120px]'
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className='absolute bottom-[25%] left-[5%] lg:left-[7%]'>
      <h1 className='text-2xl sm:text-6xl  text-white'>We see the future of logistics <br className='hidden lg:flex'/> through development</h1>
      <button className='px-[15px] sm:px-[30px] py-[8px] sm:py-[10px] text-[10px] sm:text-[16px] xl:text-xl bg-[#eb6547] mt-4 rounded-tr-[20px] sm:rounded-tr-[30px] tracking-widest font-semibold sm:font-normal'>VIEW OUR PORTFOLIO</button>
    </div>
  </div>
)

export default Hero