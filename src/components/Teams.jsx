
import React from 'react'
import { teams } from '../assets/assets'

const Teams = () => {
  return (
    <div id='team' className='py-20 bg-white'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark'>Meet the team</h1>
                <p className='max-w-xl mx-auto text-dark/60 text-xl'>Behind every successful project is a passionate and skilled team - and ours is no exception.</p>

            </div>
            {/* Teams members */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    teams.map((team, index) =>(
                        <div key={index} className='rounded-xl overflow-hidden border border-primary/50 bg-white flex items-center gap-5 hover:scale-105 transition duration-300 cursor-pointer'>

                            <img className='w-12 h-12 rounded-full object-cover'src={team.image} alt="" />
                            <div>
                                <h1 className='text-sm text-dark font-semibold'>{team.name}</h1>
                                <p className='text-sm text-dark/60'>{team.designation}</p>
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    </div>
  )
}

export default Teams