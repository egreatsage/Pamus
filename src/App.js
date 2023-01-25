import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingsAdd, StaffAdd, Bookings, Dashboard, Occupants, MyProfile, Staff, OccupantsAdd, BookingsAllocate } from './Admin/Pages/index'
import Booking from './Client/Pages/Hosteller/Booking'
import {Home} from './Client/Pages/index'
import Login from './Client/Pages/Hosteller/Login'
import SignUp from './Client/Pages/Hosteller/SignUp'
import Rules from './Client/Pages/Rules'
import  HostellarPr from './Routes/HostellarPr'
import  StaffPr from './Routes/StaffPr'
import  UserPr from './Routes/UserPr'
import UserProfile from './Client/Pages/Hosteller/UserProfile'
import UserSignUp from './Client/Pages/UserSignUp'
import UserLogin from './Client/Pages/UserLogin'
import StaffProfile from './Client/Pages/Staff/StaffProfile'
import Reply from './Client/Pages/Hosteller/Reply'
import StaffLogin from './Client/Pages/Staff/StaffLogin'
import SNotices from './Client/Pages/SNotices'
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
          {/* Main */} 
        <Route path='/' element={<Home/>}/>
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/notices' element={<SNotices/>}/>

          {/* Staff */}
        <Route path='/staff' element={<StaffPr><Staff  getStaffId={getStaffHandler}/></StaffPr>}/>
        <Route path='/staffadd' element={<StaffPr><StaffAdd id={staffId} setStaffId={setStaffId}/></StaffPr>}/>
        <Route path='/stafflogin' element={<StaffLogin/>}/>
        <Route path='/staffsignup' element={<StaffSignUp/>}/>
        <Route path='/staffprofile' element={<StaffPr><StaffProfile/></StaffPr>}/>

          {/* Hosteller */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/reply' element={<Reply/>}/>
        <Route path='/booking' element={ <UserPr><Booking/></UserPr> }/>
        <Route path='/userprofile' element={<HostellarPr><UserProfile/></HostellarPr>}/>
       
          {/* Admin */}
        <Route path='/bookings' element={<StaffPr><Bookings getBookingId={getBookingIdHandler} /></StaffPr>}/>
        <Route path='/bookingsadd' element={<StaffPr><BookingsAdd  id={bookingId} setBookingId={setBookingId}/></StaffPr>}/>
        <Route path='/bookingsallocate' element={<StaffPr><BookingsAllocate  id={bookingId} setBookingId={setBookingId}/></StaffPr>}/>
        <Route path='/occupants' element={<StaffPr><Occupants getOccupantId={getOccupantHandler}/></StaffPr>}/>
        <Route path='/occupantadd' element={<StaffPr><OccupantsAdd  id={bookingId} setBookingId={setBookingId} /></StaffPr>}/>
        <Route path='/dashboard' element={<StaffPr><Dashboard/></StaffPr>}/>
        <Route path='/myprofile' element={<StaffPr><MyProfile/></StaffPr>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App