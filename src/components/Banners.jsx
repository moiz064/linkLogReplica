import React from 'react'
import Banner from './Banner'
import { bannersData } from '../constants'

const Banners = () => {
  return (
    <div className='bg-[#252429] py-[30px] my-[60px] px-[15px]'>
        {bannersData.map((data)=>(
          <div className='mb-[60px]'>
            <Banner {...data} />
          </div>
            
        ))}
        
    </div>
  )
}

export default Banners