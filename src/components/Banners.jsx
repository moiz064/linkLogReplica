import React from 'react'
import Banner from './Banner'
import { bannersData } from '../constants'

const Banners = () => {
  return (
    <div className='bg-[#252429] py-[30px] mb-[60px] sm:mt-[60px] mt-[0px] px-[15px] lg:px-[150px]'>
        {bannersData.map((data)=>(
          <div className='mb-[40px]'>
            <Banner {...data} />
          </div>
            
        ))}
        
    </div>
  )
}

export default Banners