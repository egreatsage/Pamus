
import { Button, Menu, MenuHandler,  MenuList} from '@material-tailwind/react';
import { AiOutlineMore } from 'react-icons/ai';
import React,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {useUserAuth} from '../../../Context/UserAuthContext'
import dbdataservice from '../../../Operations';
import Profile from '../../../Common/Profile';
import Navbar from '../../Components/Navbar';
import { Tooltip,Divider } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
const UserProfile = () => {
    const { user,} = useUserAuth();
    const [bookings, setBookings] = useState([]);
    const [occupants, setOccupants] = useState([]);
    let userId = user.uid;
    useEffect(() => {
        getAllBookings();
    }, []);

    const getAllBookings = async () => {
        const data = await dbdataservice.getAllBookings();
        setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }; 
      useEffect(() => {
        getAllOccupants();
      }, []);
      const getAllOccupants = async () => {
        const data = await dbdataservice.getAllOccupants();
        setOccupants(data.docs.map((doc) => ({ ...doc.data(),
          id: doc.id })));
      };
      const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      })
  
  return (
  <div>
    {/* <Navbar/> */}

      <div className='md:px-3 pt-  6 rounded-md shadow-lg border'>
      
      <div className=''>
       
</div> 
    <div className='px-5 my-5 justify-between flex'>
    <div className='font-bold text-2xl md:text-3xl mt-4'> 
    </div>
    <div className='flex gap-2'>
       <div className='mt-[9px]'>
       <Profile/>
       </div>
        <Menu>
      <MenuHandler>
      <Tooltip title="More ">
          <button>
          <AiOutlineMore className='lead leading-8 top-0 text-2xl bold cursor-pointer'/>
          </button>
            </Tooltip>
      </MenuHandler>
     
      <MenuList className='flex flex-col mt-3'>
      <h1 className='mt-3 text-black text-center mb-3'>More Actions</h1>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Book A Room</Link>
      <Divider/>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/rules'>Hostel Rules</Link>
      <Divider/>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/notices'>Hostel Notices</Link>
      <Divider/>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Contact Admin</Link>
      <Divider/>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Connect with friends</Link>
      </MenuList>
    </Menu>
       
    </div>
    </div>
<div ref={componentRef} className='mt-4'>
<button className='underline tracking-wider ml-5 hover:text-[blue]' onClick={handlePrint}>Print Document</button>
<div className='px-5 mb-9'>
<div className='text-2xl text-black md:text-3xl'><p>Room Details</p></div>
     {occupants?.filter((room) => room.userId === userId).map((doc, index) => {
        return(
     <div className='bg-[lavender] px-5'>
     <div className='px-5 py-5 mb-5'>
     <div className=' grid md:grid-cols-3'>    
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Room Number: {doc.RoomNo}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Entry Date: {doc.EntryDate}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'> Exit Date: {doc.ExitDate}</p>
        </div>
     </div>
     <div>

        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'> Period: {doc.Period}</p>
        </div>
        
     </div>
     </div>
     </div>
     </div>
       )
    })}
</div>
 {bookings?.filter((booking) => booking.userId === userId).map((doc, index) => {
        return(
    <div className='w-full rounded-md md:px-9 bg-[white] text-white outline-yellow-800 shadow-lg'>  
     <div className='px-5 py-5 mb-5'>
     <div className='text-2xl text-black md:text-3xl'><p>Personal Information</p></div>
     <div className='grid md:grid-cols-3'>    
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>First Name: {doc.FName}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Last Name: {doc.LName}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Gender: {doc.Gender}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>  Phone Number: {doc.PNumber}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>  Email Address: {doc.email}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Marital Status:{doc.MaritalStatus} </p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Home County: {doc.Homecounty}</p>
        </div>
     </div>
     </div>
     </div>
     <div className='px-5 py-5 mb-5'>
     <div className='text-2xl text-black md:text-3xl'><p>Parent/Guardian Information</p></div>
     <div className='grid md:grid-cols-3'>    
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Full Name: {doc.PGName}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Contact: {doc.PGContact}</p>
        </div>
     </div>
     </div>
     </div>
     <div className='px-5 py-5 mb-5'>
     <div className='text-2xl text-black md:text-3xl'><p>Emergency Information</p></div>
     <div className='grid md:grid-cols-3'>    
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Full Name: {doc.EName}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Contact: {doc.EContact}</p>
       </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Relation: {doc.Relation}</p>
       </div>
     </div>
     </div>
     </div> 
     <div className='px-5 py-5 mb-5'>
     <div className='text-2xl text-black md:text-3xl'><p>Institution Information</p></div>
     <div className='grid md:grid-cols-3'>    
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Institution Name: {doc.Institution}</p>
        </div>
     </div>
     <div>
        <div className='px-4 mb-4 py-2 md:w-96 bg-gray-50 rounded-md'>
            <p className='flex text-gray-700'>Year Of Study: {doc.YearOfStudy}</p>
       </div>
     </div>
     
     
     </div>
     </div> 
    </div>
     )
    })}
</div>
<<<<<<< HEAD
<div>
    
   
</div>
=======
</div>

>>>>>>> 568b47c3f414c18fa89d123638181fd7840e9a11
  </div>
  )
}

export default UserProfile