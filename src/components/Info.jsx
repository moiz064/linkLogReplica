import React from 'react'
import { info } from '../constants'

const Info = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row-reverse mx-[15px] lg:mx-[110px] xl:mx-[200px] my-[90px] h-[450px] sm:h-[350px]  rounded-tl-[100px]'>

      <div className='relative flex-1 sm:basis-3/5 md:basis-2/4 lg:basis-2/5 flex-wrap p-[10px] sm:px-[20px] sm:py-[50px] border-[3px] bg-[#96b7c0] border-[#cfb380]  sm:rounded-tr-[100px]'>

        <h1 className='text-xl sm:text-3xl font-medium mb-[10px]'>{info.title}</h1>
        <p className='mb-[8px] text-[14px] sm:text-[16px]'>{info.desc}</p>
        <button className='py-[12px] sm:py-[20px]  px-[20px] sm:px[60px] bg-[#252429] text-white font-semibold mt-4 rounded-tr-[25px] tracking-widest md:text-lg text-[10px] absolute bottom-[20px]'>
          {info.btnName}
        </button>
      </div>

      <div className='flex-1 sm:basis-2/5 md:basis-2/4 lg:basis-3/5 overflow-hidden border-[3px] border-b-[0px] sm:border-l-[3px] sm:border-r-[0px]  border-[#cfb380]  rounded-tr-[100px] sm:rounded-tr-none sm:rounded-tl-[100px]' >
        <img src={info.img} alt={info.img}
          className='object-cover h-full w-full'
        />

      </div>
    </div>
  )
}

export default Info