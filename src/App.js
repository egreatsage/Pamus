import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingsAdd, StaffAdd, Bookings, Dashboard, Occupants, MyProfile, Staff, OccupantsAdd } from './Admin/Pages/index'
import Booking from './Client/Pages/Hosteller/Booking'
import {Home} from './Client/Pages/index'
import Login from './Client/Pages/Hosteller/Login'
import SignUp from './Client/Pages/Hosteller/SignUp'
import Rules from './Client/Pages/Rules'
import  HostellarPr from './Routes/HostellarPr'
import UserProfile from './Client/Pages/Hosteller/UserProfile'
function App() {
  const [staffId, setStaffId] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [occupantId, setOccupantId] = useState('');
  const [noticeId, setNoticeId] = useState('');


  const getStaffHandler = (id)=>{
    setStaffId(id);
  }
  const getOccupantHandler = (id)=>{
    setOccupantId(id);
  }
  const getNoticeHandler = (id)=>{
    setNoticeId(id);
  }
  const getBookingIdHandler=(id) =>{
    setBookingId(id);
  }  
  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/booking' element={
        <HostellarPr> <Booking/></HostellarPr>
        }/>
        <Route path='/bookings' element={<Bookings getBookingId={getBookingIdHandler} />}/>
        <Route path='/occupants' element={<Occupants getOccupantId={getOccupantHandler}/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/staff' element={<Staff  getStaffId={getStaffHandler}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookingsadd' element={<BookingsAdd  id={bookingId} setBookingId={setBookingId}/>}/>
        <Route path='/staffadd' element={<StaffAdd/>}/>
        <Route path='/OccupantsAdd' element={<OccupantsAdd  id={bookingId} setBookingId={setBookingId} />}/>
          {/* Hosteller */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>

          

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App