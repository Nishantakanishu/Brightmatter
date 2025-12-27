
import React, { useState } from 'react'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    // eslint-disable-next-line no-undef
    const [showMenu, setshowMenu] = useState(false);
  return (
    <div className='w-full fixed top-0 z-50 backdrop-blur-2xl'>
        <div className='flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40'>
            {/*Left section*/}
            <div>
                <span className='text-3xl font-bold text-dark'>Brightmatter.io</span>
                <div className='w-4 h-4 bg-primary rounded-full'></div>
            </div>

            {/* Mid section Menu */}
            <div className='hidden md:flex items-center space-x-6 text-dark/80 font-semibold'>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#work">Our Work</a>
                <a href="#contact">Contact Us</a>


            </div>

            {/* right section buttons */}
            <div className='hidden md:block'>
                <button className='px-6 py-2.5 bg-primary text-dark font-semibold rounded-full cursor-pointer flex items-center gap-2'>
                    Contact Me
                    <FaArrowRightLong/>

                </button>
            </div>
            {/* Mobile version */}
            <div className='md:hidden z-10'>

                {
                    showMenu ?
                    <FaXmark onClick={()=> setshowMenu(!showMenu)} className='text-xl text-dark'/> :
                    <FaBars onClick={()=> setshowMenu(!showMenu)} className='text-dark text-xl'/>
                }
                
                
            </div>


        </div>
        {/* Mobile menu */}
        {
            showMenu && (
            <div className='md:hidden flex flex-col items-center justify-center space-y-6 fixed bg-primary/50 w-64 top-0 right-0 h-screen'>
                <a onClick={()=> setshowMenu(!showMenu)} href="#home">Home</a>
                <a onClick={()=> setshowMenu(!showMenu)}href="#services">Services</a>
                <a onClick={()=> setshowMenu(!showMenu)}href="#work">Our Work</a>
                <a onClick={()=> setshowMenu(!showMenu)}href="#contact">Contact Us</a>
            </div>
                
            )
        }
    </div>
  )
}

export default Navbar;