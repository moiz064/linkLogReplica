import React from 'react'

const RegCard = ({ img, title, stat1, stat2 }) => (
    <div className='flex flex-col md:h-[300px] lg:h-[350px] md:w-[310px] lg:w-[350px] border-[3px] border-[#cfb380]'>
        
        <div className='basis-1/2 lg:basis-3/5 max-h-[120px] sm:max-h-[200px] lg:max-h-[250px] w-full bg-[#252429] overflow-hidden'>
            <img src={img} alt={img} className='sm:object-cover sm:h-full sm:w-full object-center' />
        </div>

        <div className='basis1/2 lg:basis-2/5 relative flex flex-col h-[150px] sm:h-[150px] w-full bg-[#252429] p-5'>
            <h3 className='font-semibold sm:font-normal text-[14px] sm:text-[16px] tracking-widest text-white mb-[2px]'>{title}</h3>
            <div className='flex'>
                <p className='text-[18px] sm:text-[30px] text-white'>{stat1}</p>
                <p className='text-[16px]  sm:text-[24px] self-end ml-[3px] text-white'>Total SF</p>
            </div>
                <div className='flex'>
                    <p className='text-[18px] sm:text-[28px] md:[28px] text-white'>{stat2}</p>
                    <p className='text-[16px] sm:text-[22px] md:[22px] self-end ml-[3px] text-white'>Properties</p>
                </div>
                    <a className='text-white text-[11px] tracking-widest cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none absolute bottom-5 left-[20px] sm:left-[80%] md:left-[65%] lg:left-[70%]'>
                    MEET THE TEAM
                </a>
                

        </div>

    </div>
)

export default RegCard