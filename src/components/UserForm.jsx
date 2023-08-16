import React from 'react'

const UserForm = () => {
    return (
        <div className='py-[50px] mt-[50px] mx-[15px] lg:px-[110px] text-[12px] font-poppins'>
            <h1 className='text-[26px] sm:text-[38px] pb-[20px] font-thin font-sans border-b-[2px] border-black'>
                Get in touch with us to learn more
            </h1>
            <p className='text-[11px] sm:text-[12px] my-[30px]'>
                If you would like to learn more about Link and what we do, please send us a message.
            </p>
            <div className='sm:flex gap-[30px] '>
                <label className='tracking-widest w-full'>NAME
                    <input type="text" className='w-full h-[50px] mb-[15px] border-[2px] border-gray-400' />
                </label>
                <label className='tracking-widest w-full'>EMAIL
                    <input type="text" className='w-full h-[50px] mb-[15px] border-[2px] border-gray-400' />
                </label>
                <label className='tracking-widest w-full'>SUBJECT
                    <input type="text" className='w-full h-[50px] mb-[15px] border-[2px] border-gray-400' />
                </label>
            </div>

            <label className='tracking-widest sm:flex flex-col'>GEOGRAPHIC AREA OF INTEREST
                <input type="text" placeholder='i.e. Lower Midwest, Atlanta, National' className='w-full sm:w-[225px] md:w-[310px] lg:w-[340px] h-[50px] mb-[15px] border-[2px] border-gray-400' />
            </label>
            
            <div className='md:flex flex-row'>
                
                <div className='basis-4/6'>
                    <label className='tracking-widest'>MESSAGE
                    <input type="text" className='w-full h-[220px] md:h-[180px] border-[2px] border-gray-400' />
                </label>
                </div>
                
                <div className='basis-2/6 md:ml-[15px] flex flex-col items-start'>
                    <div className='flex text-sm gap-x-[10px] my-[30px]'>
                        <input type='checkbox' />
                        <p className='text-[11px] sm:[12px] md:[14px]'>I accept that Link retains my personal information pursuant to Link's process.</p>
                    </div>
                    <button className='h-[45px] sm:h-[60px]  px-[25px] sm:px-[40px] bg-[#1b1413] text-white mt-4 rounded-tr-[25px] sm:rounded-tr-[40px] tracking-widest sm:text-[12px] text-[10px]'>
                        SUBMIT
                    </button>
                </div>

            </div>


        </div>
    )
}

export default UserForm