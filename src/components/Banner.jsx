import React from 'react'

const Banner = ({ title, desc, img, btnText, imgLoc, curveLoc }) => {
    
    return (
        <div className={`flex flex-col-reverse  mx-[10%] my-[50px] h-[450px] md:h-[400px]
                        ${imgLoc == 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} `}>
            <div className={`flex-1 flex-wrap p-6 ${imgLoc == 'right' ? 'md:text-right' : 'text-left'}`}>
                <h1 className='text-xl md:text-4xl text-[#cfb380] font-semibold mb-[10px] md:mb-[40px]'>{title}</h1>
                <p className='mb-[8px] md:text-lg text-[#cfb380]'>{desc}</p>
                <button className='h-10  px-[20px] bg-[#eb6547] mt-4 rounded-tr-[25px] tracking-widest md:text-lg text-xs'>
                    {btnText}
                </button>


            </div>
            <div className={`flex-1 overflow-hidden border-[3px] border-[#cfb380]  
                            ${imgLoc == 'left' ? (curveLoc == 'bottom' ? 'rounded-bl-[100px]' : 'rounded-tl-[100px]') : (curveLoc == 'bottom' ? 'rounded-br-[100px]' : 'rounded-tr-[100px]')}`} >
                <img src={img} alt={img}
                    className='object-cover h-full w-full'
                />
            </div>




        </div >
    )
}

export default Banner