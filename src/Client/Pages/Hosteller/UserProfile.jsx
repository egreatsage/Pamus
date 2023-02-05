
import { Button} from '@material-tailwind/react';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useUserAuth} from '../../../Context/UserAuthContext'
import dbdataservice from '../../../Operations';
import Profile from '../../../Common/Profile';
import Navbar from '../../Components/Navbar';
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
  
  return (
  <div>
    <Navbar/>
      <div className='md:px-3 pt-6 rounded-md shadow-lg'>
      
      <div className='justify-end flex '>
</div> 
<div className='pt-5 flex px-4 justify-start gap-7'>
    <Link to='/notices'>
    <Button  className=' bg-gray-700 hover:bg-black font-extrabold text-white  py-2 rounded-md'>Notices</Button>
    </Link>
     <Link to='/rules'>
     <Button  className=' bg-gray-700 hover:bg-black  font-extrabold text-white  py-2 rounded-md'>Hostel Rules</Button>
     </Link>
     <Link to='/booking'>
     <Button  className=' bg-gray-700 hover:bg-black  font-extrabold text-white  py-2 rounded-md'>Book A Room</Button>
     </Link>
</div>
    <div className='px-5 my-5 justify-between flex'>
    <div className='font-bold text-2xl md:text-3xl mt-4'>
       
    </div>
    <div>
        <Profile/>
    </div>
    </div>
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
<div>
    
   
</div>
  </div>
  )
}

export default UserProfile