import React from 'react'

const RegCard = ({ img, title, stat1, stat2 }) => (
    <div className='mx-10 max-w-[900px] lg:max-w-[400px]'>
        <div className='h-[200px] w-full bg-[#252429] overflow-hidden border-[3px] border-[#cfb380]'>
            <img src={img} alt={img} />
        </div>

        <div className='relative flex flex-col h-[200px] w-full bg-[#252429] p-5'>
            <h3 className='font-semibold text-2xl  text-white mb-2'>{title}</h3>
            <div className='flex'>
                <p className='text-2xl text-white'>{stat1}</p>
                <p className='text-xl self-end ml-[3px] text-white'>Total SF</p>
            </div>
            <div className='flex'>
                <p className='text-2xl text-white'>{stat2}</p>
                <p className='text-xl self-end ml-[3px] text-white'>Properties</p>
            </div>
            <a className='text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none absolute bottom-5 left-3 md:left-[80%] lg:left-3'>
                MEET THE TEAM
            </a>
        </div>

    </div>
)

export default RegCard