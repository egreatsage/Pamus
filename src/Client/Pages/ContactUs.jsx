import React, {useRef, useState} from 'react'
import Navbar from '../Components/Navbar'
import {BsTelephoneInbound} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import emailjs from '@emailjs/browser'
import dbdataservice from '../../Operations';
import { Alert } from '@mui/material'
const ContactUs = () => {
    const form = useRef();
    const [message, setmessage] = useState();
    const [fullname, setfullname] = useState('');
    const [messsage, setmesssage] = useState('');
    const [email, setemail] = useState('');
    const handleSubmit = async (e) => {
      setmessage("");
      const newMessage= {
       fullname,messsage,email     
      };
      try {
          await dbdataservice.addMessage(newMessage);  
          setmessage({ error: false, msg: "Message sent,Thank you for Contacting Us!" });
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }  
    };
    const bothh =(e)=>{
      e.preventDefault();
      sendemail();
      handleSubmit();
      

    }
    
    const sendemail =(e)=>{
     
      emailjs.sendForm(
        "service_sq7odd6",
        "template_iudgy6d",
        form.current, 
        "5W1bmGAvNux2p5tEO"
      )
      .then((result)=>{
       console.log('sent')
      }, (error)=>{
        console.log('try again')
      })
     
    }

  return (
    <div>
      <div>
      <Navbar/>
      </div>
     
      <div className='grid md:grid-cols-2 mt-36 shadow-lg border my-12 gap-2 mb-8 rounded-md'>
           <div>
        
              <form ref={form} onSubmit={bothh}
              
               className='mx-4 my-4 md:border rounded-md'>
                <p className='mt-4 text-center tracking-wider text-xl'>Send Us A Message</p>
                {message?.msg && (
        <Alert 
        color={message?.error?'error' :'info'}
        dismissible
        onClose={()=> setmessage('')}>
          {''}
          {message?.msg}
        </Alert>
      )}
                <div className='my-8 md:mx-7'>
                <input className='w-full px-2 border border-blue-gray-300 py-2 rounded-md focus:bg-gray-50' type='name' placeholder='Enter Your Name' required
                name='user_name'
                onChange={(e)=>setfullname(e.target.value)}/>
                </div>

                <div className='my-8 md:mx-7'>
                <input className='w-full border px-2 border-blue-gray-300 py-2 rounded-md focus:bg-gray-50' type='email' placeholder='Enter Your Email' required
                name='user_email'
                onChange={(e)=>setemail(e.target.value)}/>
                </div>

                <div className='my-8 md:mx-7'>
                <textarea className='w-full border px-2 border-blue-gray-300 py-2 rounded-md focus:bg-gray-50' type='name' placeholder='Message' required
                name='subject'
                onChange={(e)=>setmesssage(e.target.value)}/>
                </div>
                <div className='my-8 md:mx-7 flex justify-end'>
                <button  className='bg-gray-600 text-white px-2 py-1  rounded-md hover:bg-gray-900'>Send Message</button>
                </div>
                
               
               
              </form>
           </div>
           <div className='md:mt-20'>
                 <div className='flex my-3'>
                 <BsTelephoneInbound className=' m-3 text-3xl '/>
                 <p className='mt-3 tracking-wider'>+254769375210 | +254722820702</p>
                 </div>
          
           
                 <div className='flex my-3'>
                 <AiOutlineMail className=' m-3 text-3xl '/>
                 <p className='mt-3 tracking-wider'>pamushostel@gmail.com</p>
                 </div>
         
           
                 <div className='flex my-3'>
                 <GrMapLocation className=' m-3 text-3xl '/>
                 <p className='mt-3 tracking-wider'> 1471-50200 
                  Bungoma Township,Railway Station</p>
                 </div>
          
           </div>
           
           
      </div>
    </div>
  )
}

export default ContactUs