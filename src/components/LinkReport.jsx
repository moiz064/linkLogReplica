import React from 'react'
import Banner from './Banner'
import { reportData } from '../constants'

const LinkReport = () => {
  return (
    <div className='bg-[#252429] py-[50px] mt-[30px] sm:mb-[30px] mb-0 px-[15px] lg:px-[150px] md:-[50px] lg:y-[80px]  my-[60px]'>
        <Banner {...reportData} />
    </div>
  )
}

export default LinkReport