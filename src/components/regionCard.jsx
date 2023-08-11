import React from 'react'

const regionCard = ({img,title,stat1, stat2}) => (
  <div className='mx-10'>
      <div className='h-[250px] w-[400px] bg-[#252429] overflow-hidden border-[3px] border-[#cfb380]'>
          <img src={img} alt={img} />
      </div>

      <div className='relative flex flex-col h-[250px] w-[400px] bg-[#252429] p-5'>
          <h3 className='font-semibold text-2xl  text-white mb-2'>{title}</h3>
          <p className='text-xl text-white'>{stat1}</p>
          <a className='text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none absolute bottom-3 right-3'>REA MORE</a>
      </div>

  </div>
)

export default regionCard