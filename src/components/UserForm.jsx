import React from 'react'

const UserForm = () => {
    return (
        <div className='py-[50px] mt-[50px] px-[30px]'>
            <h1 className='text-3xl md:text-5xl pb-[20px] font-light border-b-[3px] border-black'>
                Get in touch with us to learn more
            </h1>
            <p className='text-sm my-[30px]'>
                If you would like to learn more about Link and what we do, please send us a message.
            </p>
            <div className='md:flex gap-[30px]'>
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

            <label className='tracking-widest'>GEOGRAPHIC AREA OF INTEREST
                <input type="text" placeholder='i.e. Lower Midwest, Atlanta, National' className='w-full  h-[50px] mb-[15px] border-[2px] border-gray-400' />
            </label>
            <label className='tracking-widest'>MESSAGE
                <input type="text" className='w-full h-[220px] border-[2px] border-gray-400' />
            </label>
            <div className='flex text-sm gap-x-[10px] my-[30px]'>
                <input type='checkbox' />
                <p>I accept that Link retains my personal information pursuant to Link's process.</p>
            </div>
            <button className='h-[45px] md:h-[60px]  px-[25px] md:px-[40px] bg-[#1b1413] text-white mt-4 rounded-tr-[25px] md:rounded-tr-[40px] tracking-widest md:text-lg text-xs'>
                SUBMIT
            </button>

        </div>
    )
}

export default UserForm