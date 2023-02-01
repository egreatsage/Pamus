import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings,MdPeopleOutline,MdBedroomChild } from 'react-icons/md'
import {TbBrandBooking} from 'react-icons/tb'
import {BiHotel} from "react-icons/bi"
import {FcTodoList} from 'react-icons/fc'
import {ImProfile} from 'react-icons/im'
import  {Divider} from '@mui/material'
function Navbar() {
  return (
    <div>
      <div>
      <nav class="bg-gray-50 p-2 mt-0 fixed w-full z-10 top-0 mb-9">
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
            href="#"
            >Staff</Link>
        </li>
      </ul>
           </div>
            </ul>
        </div>
                </div>
        </nav>
      </div>
      <div>
   <AiOutlineMenu className='cursor-pointer text-2xl' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"/>
    <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">Pamus</h5>
        <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body overflow-y-auto mt-16 ml-16">
      <div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><MdOutlineAdminPanelSettings className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/dashboard'>Dashboard</Link></div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><TbBrandBooking className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/bookings'>Bookings</Link></div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><BiHotel className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/occupants'>Occupants</Link></div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><MdPeopleOutline className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/staff'>Staff</Link></div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><MdBedroomChild className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/rooms'>Rooms</Link></div>
        <Divider/>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-6'><FcTodoList className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/reminders'>My ToDo</Link></div>
        <div className='flex gap-6 hover:bg-gray-100 rounded-md mr-16 my-5'><ImProfile className='text-2xl my-[3px] ml-2'/><Link className='my-[3px]' to='/myprofile'>My Profile</Link></div>
      </div>
      </div>
    </div>
  </div>

          
    </div>
  )
}

export default Navbar