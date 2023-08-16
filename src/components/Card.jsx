import React from 'react'

const Card = ({ img, title, desc }) => (
    <div className='flex flex-col md:h-[500px] md:w-[300px] lg:w-[350px]'>
        <div className='flex-1 w-full bg-[#252429] overflow-hidden border-[3px] border-[#cfb380] xs:max-h-[300px]'>
            <img src={img} alt={img} className='sm:object-cover sm:h-full sm:w-full object-top' />

        </div>

        <div className='flex-1 w-full bg-[#252429] p-5 overflow-hidden '>
            <div className='line-clamp-2 mb-[10px]'>
                <h3 className='font-semibold text-lg sm:text-2xl  text-white text-ellipsis mb-2'>{title}</h3>

            </div>
            <div className='h-[70px] sm:h-[90px] line-clamp-3 mb-[30px]'>
                <p className='text-md sm:text-xl text-white text-ellipsis'>{desc}</p>

            </div>
            <div className='flex flex-row-reverse'>
                <a className='text-[10px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '>READ MORE</a>
            </div>
        </div>

    </div>
)

export default Card