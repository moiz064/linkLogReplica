import { Link } from "react-router-dom"

import { linklogoblack, search, arrowDown, menu, close } from "../assets"
import { navLinks } from '../constants'
import { useState } from 'react'


const Navbar = () => {

    const [hovering, setHovering] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [id, setID] = useState()

    return (
        <div className="z-10 fixed w-full">
            <div className='w-full bg-[#96b7c0]'>
                <nav className='flex py-4 xl:px-[160px] lg:px-[110px] md:px-[40px] px-[15px] justify-between items-center navbar '>
                    <img src={linklogoblack} alt="logo"
                        className='xl:w-[125px]'
                    />
                    <ul className='list-none md:flex hidden justify-end items-center flex-1 '>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-normal cursor-pointer text-[12px] tracking-widest ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[25px]'}`}
                                onMouseOver={() => {
                                    setHovering(true)
                                    setID(nav.id)
                                }}
                                onMouseOut={() => setHovering(false)}
                            >
                                <div className='flex place-items-center '>
                                    <Link to={`${nav.id}`}
                                        className="hover:text-[#C45508]">
                                        {nav.title}
                                    </Link>
                                    <img src={arrowDown} alt='arrow'
                                        className={` h-[10px] ml-[8px] ${nav.subLinks.length !== 0 ? 'flex' : 'hidden'}`}

                                    />
                                </div>
                                <div className={` ${hovering == true && nav.id == id && nav.subLinks.length !== 0 ? 'flex' : 'hidden'} `}>

                                    <ul className='bg-white w-[150px] p-5 absolute z-10'>
                                        {nav.subLinks.map((link) => (
                                            <li key={nav.id}>
                                                <p className="mb-[10px]">{link}</p>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </li>

                        ))}
                    </ul>
                    <img src={search} alt="search"
                        className='w-[16px] ml-10 md:flex hidden'
                    />
                    <img src={toggle ? search : menu} alt="menu"
                        className='w-[18px] ml-10 md:hidden flex'
                        onClick={() => setToggle((prev) => !prev)}
                    />


                </nav>

            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} bg-[#96b7c0] h-full w-full relative z-10`}>
                <ul className='p-[40px]'>
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className='font-normal cursor-pointer text-[18px] tracking-widest mb-5'
                        >
                            <p className='mb-10'>{nav.title}</p>
                            <ul>
                                {nav.subLinks.map((link) => (
                                    <li key={nav.id}
                                        className={`font-light cursor-pointer text-[14px] tracking-widest '}`}>
                                        <p className='mb-8'>{link}</p>
                                    </li>
                                ))
                                }
                            </ul>
                        </li>
                    ))}
                </ul>
                <img src={close} alt="close"
                    className='h-[15px] absolute top-5 right-5'
                    onClick={() => setToggle((prev) => !prev)}
                />

            </div>
        </div>


    )
}

export default Navbar