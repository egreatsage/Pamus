import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
           <nav class="bg-gray-50 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold ">
            <a class="text-gray-900 no-underline hover:text-black hover:no-underline" href="#home">
                <span class="text-2xl pl-2"><i class="em em-grinning"></i>Pamus</span>
            </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                <Link className='mx-2' to='/' >Home</Link>
                <Link className='mx-2' to='/' >About Us</Link>
                <Link className='mx-2' to='/' >Amenities</Link>
                <Link className='mx-2' to='/' >Pricing</Link>    
                <Link className='mx-2' to='/' >Testimonials</Link>
            
            </ul>
        </div>
    </div>
        </nav>
    </div>
  )
}

export default Navbar