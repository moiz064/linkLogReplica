import React from 'react'

const Banner = ({ title, desc, img, btnText, imgLoc, curveLoc }) => (
    <div className={`flex flex-col-reverse sm:h-[300px] lg:h-[350px]
                        ${imgLoc == 'right' ? 'sm:flex-row' : 'sm:flex-row-reverse'} `}>

        <div className={`flex-1 flex flex-wrap py-6 sm:px-[30px] md:px-[60px] ${imgLoc == 'right' ? 'sm:text-right' : 'text-left'}`}>

            <h1 className='text-xl sm:text-2xl text-[#cfb380] font-semibold mb-[10px] md:mb-[40px]'>{title}</h1>
            <p className='mb-[8px] sm:text-base text-[#cfb380]'>{desc}</p>
            <button className='px-[15px] sm:px-[30px] py-[8px] sm:py-[10px] text-[9px] sm:text-[16px] xl:text-xl font-bold sm:font-normal bg-[#eb6547] mt-4 rounded-tr-[20px] tracking-widest'>
                {btnText}
            </button>

        </div>

        <div className={`flex-1 overflow-hidden border-[3px] border-[#cfb380]  
                            ${imgLoc == 'left' ? (curveLoc == 'bottom' ? 'rounded-bl-[60px] sm:rounded-bl-[100px]' : 'rounded-tl-[60px] sm:rounded-tl-[100px]') : (curveLoc == 'bottom' ? 'rounded-br-[60px] sm:rounded-br-[100px]' : 'rounded-tr-[60px] sm:rounded-tr-[100px]')} min-h-[160px]`} >
            <img src={img} alt={img}
                className='object-cover h-full w-full'
            />
        </div>

    </div >
)

export default Banner