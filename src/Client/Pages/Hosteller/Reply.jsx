import { Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
const Reply = () => {
  return (
    <div>
      <Navbar/>
        <Container>
        <div className='pt-16 h-screen pb-7 mt-16 md:text-3xl font-medium 
    bg-[lavender] rounded-md'>
        <div className='px-8 pt-9 mt-9 text-center text-3xl'>
        Details Submitted Successfully.
        We will notify you via Email
        on your Booking Status.Check your portal regularly for Room Updates
        <div className='mb-7 mt-4 '>
            <Link to='/'>
            <Button className='hover:bg-blue-600 ' variant='outlined' >Go Back</Button>
            </Link></div>
            <div>
            <Link to='/userprofile'>
            <Button className='hover:bg-blue-600 ' variant='outlined' >My Profile</Button>
            </Link>
            </div>
           
        </div>
       
    </div>
        </Container>
        
    </div>
  )
}

export default Reply