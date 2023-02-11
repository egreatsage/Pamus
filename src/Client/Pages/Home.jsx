import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Slider from './Slider';
import {Divider} from '@mui/material'
import { motion } from 'framer-motion';
import {Button} from '@material-tailwind/react'
import dbdataservice from '../../Operations'
import { FcWiFiLogo,FcTodoList } from 'react-icons/fc'
import { GiWaterTank,GiSecurityGate } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings,MdPeopleOutline,MdBedroomChild } from 'react-icons/md'
import {TbBrandBooking} from 'react-icons/tb'
import {BiHotel} from "react-icons/bi"
import {ImProfile} from 'react-icons/im'

const Home = () => {
 
  const [roomtypes,setRoomTypes] = useState([]);
  useEffect(() => {
    getAllRoomTypes();
  }, []);
  const getAllRoomTypes = async () => {
    const data = await dbdataservice.getAllRoomTypes();
    setRoomTypes(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  return (
   <div className='overflow overflow-hidden'>  
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
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center gap-3">
                <a href="#home">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#amenities">Amenities</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
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
            <div>  
            <div className="mx-1" id="home">
            <div className='grid md:grid-cols-2  bg-[#e1f7fc] md:mt-16 md:mb-16 mt-16 mb-20'>
             <div className='md:mt-9 pt-9 '>
                <p className='flex justify-center text-4xl md:text-5xl extrabold md:justify-start mb-5 md:ml-12'>Pamus Hostels</p>
                 <p className='ml-2 md:ml-4 text-2xl mb-4 bold leading-tight text-gray-800'>Are you a student and needs a place to stay,Dont Worry,we got you covered</p>
                 <p className=' ml-2 md:ml-4 text-2xl mb-5 italic bold leading-tight text-gray-800'>A safe ,secure and satisfactory place to stay</p>
                 <Link to='/booking'>
                 <span className='ml-2 md:ml-4'>
                  <button className='bg-[indigo] hover:px-7 hover:shadow-md transition-transform ease-in-out hover:rounded-r-lg mb-4 px-5 py-1 rounded-md text-white '>Book Now </button></span>
                 </Link>     
             </div>
             <div>
           <Slider/>
             </div>
        </div>
       </div>
        <div className="md:mt-6 mt-6 mx-1" id="aboutus">
         <div>
             <div className='md:mt-10 mt-5'>
             <motion.section className="class" id="AboutUs"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}>
  <div className='w-full md:my-15 overflow-hidden' >
    <div className=' max-w-[1240px] mx-auto'>
      <div className=' text-center '>
        <h2 className='md:text-4xl text-3xl font-bold '>Trusted Hostels With A good Reputation</h2>
        <p className='md:text-3xl text-xl py-6 text-gray-5 '>We have partners and students all around town who are staying at the hostels 
          from all over the town
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-1 px-2 text-center cursor-pointer'>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600 '>100+</p>
          <p className='text-gray-400 mt-2'>Students</p>
        </div>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600'>15+</p>
          <p className='text-gray-400 mt-2>Students'>Partners</p>
        </div>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600'>20+</p>
          <p className='text-gray-400 mt-2>Institutions'>Institutions</p>
        </div>
      </div>
    </div>
   </div>
  </motion.section>
             </div>
    
    
       
        </div>
        </div>
       <div className="my-24" id="amenities">
         <h1 className='mb-6 text-3xl extrabold uppercase text-center tracking-wide'>Amenities</h1>
           <div className="grid md:grid-cols-3 gap-2">
           <div className='bg-white rounded-sm shadow-sm border'>
              <div className='p-8'>
                <GiWaterTank className=' w-16 cursor-pointer text-7xl text-[blue] mt-[-4rem]' />
                <h3 className='font-bold text-2xl my-6'>Water </h3>
                <p className='text-gray-600 text-xl'> privately owned water 
                pumped within the Hostel with a water bowhole as a backup
                </p>
              </div>
             
            </div>
            <div className='bg-white rounded-sm shadow-sm border'>
              <div className='p-8'>
                <FcWiFiLogo className=' w-16 cursor-pointer text-7xl text-[blue] mt-[-4rem]' />
                <h3 className='font-bold text-2xl my-6'>Wifi </h3>
                <p className='text-gray-600 text-xl'>Fast internet wifi speeds
                Fast internet wifi speeds
                Fast internet wifi speeds
                </p>
              </div>
             
            </div>
            <div className='bg-white rounded-sm shadow-sm border'>
              <div className='p-8'>
                <GiSecurityGate className=' w-16 cursor-pointer text-7xl text-[blue] mt-[-4rem]' />
                <h3 className='font-bold text-2xl my-6'>Security </h3>
                <p className='text-gray-600 text-xl'>  24hrs Security guard from certified company .Fully fenced with only main gate
                  back gate opened
                </p>
              </div>
             
            </div>
           </div>
       </div>
       <div className='md:my-24 my-14' id='pricing'>
       <section className='' id='Pricing'>
  <div className='w-full '>
    <div className=' max-w-[1240px] mx-auto'>
    <div className='max-w-[1240px] mx-auto  '>
            <div className='text-center   text-slate-300 dark:text-orange-600 '>
                <h2 className='text-3xl  font-extrabold uppercase  md:pt-0  md:mt-3'>Our Pricings</h2>
                <h3 className='text-2xl md:text-5xl font-semibold  text-[black] py-5'>Affordable Prices for Everyone</h3>
                <p className='text-xl text-black'>We Offer best price plans to students that
                    are comfortable with  everybody
                </p>
            </div>
            {roomtypes.map((doc)=>{
             return(
            <div className='grid md:grid-cols-3 gap-4 bg-gray-50'>
                <div className='bg-white dark:bg-blue-gray-500 text-slate-900 p-8  shadow-xl'>
                    <span className="uppercase px-3 py-1 bg-[#1b1a1b] text-[white] rounded-2xl text-sm">
                        {doc.Sharing}
                    </span>
                    <div>
                        <p className='text-6xl text-blue-grey-900 font-bold py-4 flex'>{doc.Price}<span className='text-xl text-blue-900 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-xl font-semibold'>{doc.Desc}</p>
                    <div>
                        <Link to='/booking'><Button className="w-full py-4 outline-blue-900 text-xl text-black my-4  bg-slate-500 rounded-full hover:bg-[#87ceeb]">Book Now</Button></Link>
                    </div>
                </div>
                
                
                  
                    </div>
                        )
                      })}

                   </div>
                 </div>
             </div>
           </section>
       </div>
       <div className='md:my-24 my-14' id="testimonials">
    <div>
      <h2  className='text-center text-3xl font-bold text-gray-900 mb-4'>What People Say About Us</h2>
          <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
  <div  className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full text-center">
      <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
      One of the best hostel arounds and the most clean with a breathable environment
      </p>
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1597393922738-085ea04b5a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80"
          className="rounded-full w-24 h-24 shadow-lg"
          alt=""
        />
      </div>
      <p className="text-gray-500">- Anna Morian</p>
    </div>
    <div className="carousel-item relative float-left w-full text-center">
      <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
       I was able to make meaningfull connections with important people and now am happy as i got my job easily from friends there
      </p>
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://nudebabes.realnakedgirls.net/wp-content/uploads/2018/02/rng_fsjdk-1.jpg"
          className="rounded-full w-24 h-24 shadow-lg"
          alt=""
        />
      </div>
      <p className="text-gray-500">- Teresa May</p>
    </div>
    <div className="carousel-item relative float-left w-full text-center">
      <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
      Interactive and Friendly People who are able to give everything you deserve to live comfortable
      </p>
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://i.pinimg.com/736x/96/47/41/9647413af6614f50ffa0cee691658d13.jpg"
          className="rounded-full w-24 h-24 shadow-lg"
          alt=""
        />
      </div>
      <p className="text-gray-500">- Iman ali</p>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
   
</div>


   </div>
  )
}

export default Home
