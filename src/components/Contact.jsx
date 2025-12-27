import React from 'react'
import { FaArrowRightLong, FaUser } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='contact' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Reach out to us</h1>
                <p className='text-dark/60 max-w-xl mx-auto'>Let's talk! Whether it's a quick question or a big project, we're just a message away.</p>

            </div>
            {/* Contact form */}
            <div className='max-w-2xl mx-auto'>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {/* Full name field */}
                        <div>
                            <label htmlFor="" className='block mb-2 text-dark'>Your Name</label>
                            <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                <FaUser />
                                <input className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm' placeholder='Enter your name' type="text" />
                            </div>
                        </div>
                        

                        {/* email field */}
                        <div>
                            <label htmlFor="" className='block mb-2 text-dark'>Your Email</label>
                            <div className='flex items-center gap-4 py-2 pl-4 rounded border border-dark/40'>
                                <FaUser />
                                <input className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm' placeholder='Enter your email' type="email" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="" className='block mb-2 text-dark'>Your Message</label>
                        <textarea className='w-full h-40 px-6 py-6 outline-none border border-dark/40 rounded' placeholder='Enter your message'></textarea>

                    </div>
                    <button className='bg-primary px-6 py-2.5 rounded-full text-dark font-semibold cursor-pointer flex items-center gap-2 mt-6'> Submit
                        <FaArrowRightLong />
                        
                    </button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Contact