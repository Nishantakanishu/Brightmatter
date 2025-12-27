import React from 'react'
import { workItems } from '../assets/assets'
import { div } from 'framer-motion/client'

const Work = () => {
  return (
    <div id='work'className='py-20'>
        <div className='container  mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest work</h1>
                <p className='text-dark/60 max-w-2xl mx-auto text-xl'>whether you're launching a new business or looking to elevate your existing brand</p>
            </div>
            {/* Work section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                    workItems.map((work, index)=>(
                     <div key={index} className='rounded-xl overflow-hidden border border-primary/50 hover:scale-105 transition duration-300 cursor-pointer'>
                        <img src={work.image} alt="" />
                        <div className='p-6 mt-6'>
                            <h1>{work.title}</h1>
                            <p>{work.description}</p>
                        </div>

                     </div>
                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default Work