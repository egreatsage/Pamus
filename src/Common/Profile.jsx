import { Alert, Divider, Modal, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContext';
import { upload } from '../Operations';
import {Menu,MenuHandler,MenuList,MenuItem,} from "@material-tailwind/react";
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
 
const Profile = () => {
    const [photo,setPhoto] = useState(null)
    const [message, setmessage] = useState()
    const [loading,setLoading] = useState(false)
    const [photoURL, setPhotoURL] = useState("https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png")
   
    const handleChange=(e)=> {
       if  ( e.target.files[0]){
        setPhoto(e.target.files[0])
       }
    }
    
    const handleClick=()=> {
       upload(photo,user,setLoading)
    }
    const { user,logOut } = useUserAuth();
    useEffect(() => {
        if (user?.photoURL ) {
            setPhotoURL(user.photoURL)   
            console.log(user.photoURL)
        }
    }, [user])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      
      bgcolor: 'white',
      border: '2px solid #white',
      boxShadow: 24,
      p: 4,
    };
    const navigate = useNavigate()
    const handlelogout= async ()=>{
        try{
            await logOut();
               navigate('/')
        }catch{     
        }
      }
  return (
    <div>
            <Menu>
      <MenuHandler>
      <Tooltip title="Account ">
          <button className='rounded-full '>
            <img src={photoURL} alt="Profile" className=' w-6 h-6  object-fit rounded-full'/>
            </button>
            </Tooltip>
      </MenuHandler>
      <MenuList>
        <h1 className='text-center font-bold my-3 mb-4 text-black'>Account Details</h1>
        <MenuItem className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black'>{user && user.displayName}</MenuItem>
        <Divider/>
        <MenuItem className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black'>{user && user.email}</MenuItem>
        <Divider/>
        <MenuItem  className='my-2 mb-4 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black'><button  onClick={handleOpen}>Update Photo</button></MenuItem>
        <Divider/>
        <Link to='/' className='text-[red] cursor-pointer flex ml-4 '>
        <button onClick={handlelogout}>Logout</button>
        </Link>
      </MenuList>
    </Menu>
  <div>
  <Modal className=' px-3 md:px-9'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-full px-3 '>
        {message?.msg && (  
         <Alert 
 color={message?.error?'error' :'info'}
 onClose={()=> setmessage('')}
 dismissible='true'
 >
   {''}
   {message?.msg}
 </Alert>
)} 
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <input  type='file'
            onChange={handleChange}/>
         <button disabled={loading || !photo} onClick={handleClick} className='bg-[green] px-2 py-1 rounded-md mt-2 text-white '>upload</button> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
  </div>
      </div>
    
  )
}

export default Profile