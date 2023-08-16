import React from 'react'
import { connectionsData } from '../constants'

const Connections = () => (
  <div className='flex flex-col-reverse sm:flex-row mx-[15px] lg:mx-[10%] my-[100px] h-[500px] rounded-br-[100px] rounded-tl-[100px]'>

    <div className='flex-1 flex items-center flex-wrap p-4 sm:px-[20px] md:px-[60px] max-w-[490px] sm:p-12 border-[3px] border-[#cfb380] rounded-br-[100px] sm:rounded-br-none sm:rounded-tl-[100px]'>
      <h1 className='text-[17px] sm:text-4xl font-semibold'>{connectionsData.title}</h1>
      <p className='text-[14px] mb-[8px]'>{connectionsData.desc1}</p>
      <h2 className='text-[15px] sm:text-[16px] font-bold'>{connectionsData.title2}</h2>
      <p className='text-[14px] sm:text-[16px]'>{connectionsData.desc2}</p>
    </div>

    <div className='flex-1 overflow-hidden border-[3px] border-b-[0px] sm:border-b-[3px] sm:border-l-[0px]  border-[#cfb380]  rounded-tl-[60px] sm:rounded-tl-none sm:rounded-br-[100px] min-h-[160px] sm:h-auto' >
      <img src={connectionsData.img} alt={connectionsData.img}
        className='object-cover h-full w-full'
      />
    </div>

  </div>
)

export default Connections