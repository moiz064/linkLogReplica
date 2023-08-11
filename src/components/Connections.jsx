import React from 'react'
import { connectionsData } from '../constants'

const Connections = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row mx-[10%] my-[10px] h-[500px] rounded-br-[100px] rounded-tl-[100px]'>
      <div className='flex-1 flex-wrap p-6 sm:p-12 border-[3px] border-[#cfb380] rounded-br-[100px] sm:rounded-br-none sm:rounded-tl-[100px]'>
        <h1 className='text-xl sm:text-4xl font-semibold'>{connectionsData.title}</h1>
        <p className='mb-[8px]'>{connectionsData.desc1}</p>
        <h2 className='text-lg sm:text-2xl font-bold'>{connectionsData.title2}</h2>
        <p>{connectionsData.desc2}</p>
        
      </div>
      <div className='flex-1 overflow-hidden border-[3px] border-b-[0px] sm:border-b-[3px] sm:border-l-[0px]  border-[#cfb380]  rounded-tl-[100px] sm:rounded-tl-none sm:rounded-br-[100px]' >
        <img src={connectionsData.img} alt={connectionsData.img}
        className='object-cover h-full w-full'
        />
      </div>
    </div>
  )
}

export default Connections