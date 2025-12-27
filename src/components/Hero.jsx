import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='w-full py-40'>
        <div className='container mx-auto px-6'>
            <div className='flex items-center mx-auto gap-4 border border-primary/60 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[25%] mb-12'>

            <div className='flex items-center -space-x-3'>
                
                
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile1Img} alt="" />

                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile2Img} alt="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile3Img} alt="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile4Img} alt="" />
            </div>
            <span>Trusted by 20k+ people</span>

            </div>
            <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
                <span>We Help Brands Grow With</span>
                <br />
                <span className='text-primary'>Performance</span>
                <span>Marketing</span>
            </h1>
            <p className='max-w-xl mx-auto text-2xl font-thin text-dark/80 text-center mb-12'>At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>
            
            <div className='mb-6 flex items-center justify-center gap-6'>

                <button className='px-6 py-2.5 bg-primary rounded-full text-dark font-semibold cursor-pointer'>Contact Me</button>
                <button className='px-6 py-2.5 bg-dark rounded-full text-white font-semibold cursor-pointer'>Digital Marketing</button>
            </div>
            <div className='max-w-5xl mx-auto mt-16 rounded-2xl shadow overflow-hidden'>
                <img className='w-full h-full object-cover' src={assets.heroImg}alt="" />
            </div>

        </div>

    </div>
  )
}

export default Hero