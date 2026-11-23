import React from 'react'
import {Link} from 'react-router'
import notFound from '../assets/images/NotFound.png'
import exclamation from '../assets/images/ErrorExclamation.svg'

const NotFound = () => {
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <img src={notFound} />
      <div className="flex gap-2 items-center">
      <img src={exclamation} className=''/>
      <p className='text-red-500 font-manrope text-2xl'>We couldn't find any properties matching your search criteria</p>
      </div>
      <p className='text-[#5C5B5B] font-inter text-lg mt-2.5'>Try adjusting your filters</p>
      <Link to='/properties' className='mt-7 bg-[#1A3C34] py-3 px-6 rounded-2xl text-white text-md cursor-pointer font-manrope'>Clear Filters</Link>
    </div>
  )
}

export default NotFound