import React from 'react'
import { background } from '../assets'

const Hero = () => (
  <div className=' flex mx-[20px] h-[650px] rounded-bl-[120px]'
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className='absolute bottom-[20%] left-[5%]'>
      <h1 className='xl:text-6xl text-4xl text-white'>We see the future of logistics <br /> through development</h1>
      <button className='xl:h-14 h-10 lg:w-80 w-[200px] bg-[#eb6547] mt-4 rounded-tr-[25px] tracking-widest xl:text-xl text-xs font-semibold'>VIEW OUR PORTFOLIO</button>
    </div>
  </div>
)

export default Hero