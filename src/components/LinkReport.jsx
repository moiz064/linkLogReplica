import React from 'react'
import Banner from './Banner'
import { reportData } from '../constants'

const LinkReport = () => {
  return (
    <div className='bg-[#252429] py-[30px] px-[15px] md:-[50px] lg:p-[80px] my-[60px]'>
        <Banner {...reportData} />
    </div>
  )
}

export default LinkReport