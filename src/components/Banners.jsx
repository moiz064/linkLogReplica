import React from 'react'
import Banner from './Banner'
import { bannersData } from '../constants'

const Banners = () => {
  return (
    <div className='bg-[#252429] py-[30px] my-[60px]'>
        {bannersData.map((data)=>(
            <Banner {...data} />
        ))}
        
    </div>
  )
}

export default Banners