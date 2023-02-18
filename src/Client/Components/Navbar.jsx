import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
  return (
    <div>
    <div>
      <nav class="bg-gray-50 p-2 mt-0 fixed w-full z-10 top-0 mb-9 ">
         <div className="flex justify-between">
             <div>
              <h1 className='tracking-wider text-2xl font-bold'>Pamus</h1>
             </div>
             <div className='md:flex gap-3 hidden' >
               <a href="/#home">Home</a>
              <a href="/#aboutus">About Us</a>
              <a href="/#amenities">Amenities</a>
              <a href="/#pricing">Pricing</a>
              <a href="/#testimonials">Testimonials</a>
              <Link className='mr-3' to='/contactus'>Contact Us</Link>
              <div class="dropdown relative ml-9">
    <button class=" flex dropdown-toggle px-9 bg-[lavender] py-1 rounded-md" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Login
     <IoMdArrowDropdown className='text-black text-2xl'/>
    </button>
    <ul class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none "
      aria-labelledby="dropdownMenuButton1"
    >
      <li>
        <Link to='/userprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-[lavender] text-black "
          >Hosteller/Student</Link>
      </li>
      <li>
        <Link to='/staffprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent   hover:bg-[lavender] text-black"
         
          >Staff</Link>
      </li>
    </ul>
         </div>  
             </div>
             <AiOutlineMenu className=' md:hidden text-black text-xl font-bold  mr-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"/>
         </div>
      </nav>
    </div>
    <div>

  <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header flex items-center justify-between p-4">
      <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">Pamus</h5>
      <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body overflow-y-auto mt-16 ml-16">
    <div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><a href="/#home">Home</a></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><a href="/#aboutus">About Us</a></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><a href="/#amenities">Amenities</a></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'> <a href="/#pricing">Pricing</a></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'> <a href="#/testimonials">Testimonials</a></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-6'><Link className='mr-3' to='/contactus'>Contact Us</Link></div>
      <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'>
      <button class=" flex dropdown-toggle px-9 bg-[lavender] py-1 rounded-md" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Login
     <IoMdArrowDropdown className='text-black text-2xl'/>
    </button>

    <ul class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none "
      aria-labelledby="dropdownMenuButton1"
    >
      <li>
        <Link to='/userprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-[lavender] text-black "
          >Hosteller/Student</Link>
      </li>
      <li>
        <Link to='/staffprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent   hover:bg-[lavender] text-black"
         
          >Staff</Link>
      </li>
    </ul></div>
    </div>
    </div>
  </div>
</div>

        
  </div>
  )
}

export default Navbar