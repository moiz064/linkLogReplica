import React from 'react'

const RegCard = ({ img, title, stat1, stat2 }) => (
    <div className='flex flex-col md:h-[400px] md:w-[320px] lg:w-[350px] border-[3px] border-[#cfb380]'>
        <div className='flex-1 w-full bg-[#252429] overflow-hidden  xs:max-h-[300px]'>
            <img src={img} alt={img} className='sm:object-cover sm:h-full sm:w-full object-bottom' />
        </div>

        <div className='relative flex flex-col h-[170px] sm:h-[150px] w-full bg-[#252429] p-5'>
            <h3 className='font-semibold sm:font-normal text-[18px] sm:text-[16px] tracking-widest text-white mb-2'>{title}</h3>
            <div className='flex'>
                <p className='text-[18px] sm:text-[30px] text-white'>{stat1}</p>
                <p className='text-[16px]  sm:text-[24px] self-end ml-[3px] text-white'>Total SF</p>
            </div>
                <div className='flex'>
                    <p className='text-[18px] sm:text-[28px] md:[28px] text-white'>{stat2}</p>
                    <p className='text-[16px] sm:text-[22px] md:[22px] self-end ml-[3px] text-white'>Properties</p>
                </div>
                    <a className='text-white text-[12px] tracking-widest cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none absolute bottom-5 left-3 sm:left-[80%] md:left-[65%] lg:left-[70%]'>
                    MEET THE TEAM
                </a>
                

        </div>

    </div>
)

export default RegCard