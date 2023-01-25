import { Button, Input, Textarea } from '@material-tailwind/react'
import React, { useState,useRef } from 'react'
import { Alert, Container } from '@mui/material'
import dbdataservice from '../../Operations';
import emailjs from '@emailjs/browser';

function Contactform() {
    const [fullname, setfullname] = useState('');
    const [message, setmessage] = useState('');
    const [email, setemail] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      setmessage("");
      if (fullname === "" || email === ""  ) {
        setmessage({ error: true, msg: "Fill In All Spaces" });
        return;
      }
      const newMessage= {
       fullname,message,email     
      };
      try {
          await dbdataservice.addMessage(newMessage);
          
          setmessage({ error: false, msg: "Message sent successfully!" });
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }  
    };
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ghpv5zh', 'template_slrajbd', form.current, '28mJ_zI2mJCTyqtLb')
        .then((result) => {
            alert('sent successfully');
        }, (error) => {
            alert('error sending');
        });
    };
  return (
    <div>
      <Container className='shadow-black'>
      <div className='pb-8 mb-8'>
          
          {message?.msg && (
        <Alert 
  color={message?.error?'error' :'info'}
  dismissible
  onClose={()=> setmessage('')}>
   {''}
   {message?.msg}
  </Alert> 
  )}
          <form ref={form} onSubmit={sendEmail} > 
              <div className='mb-4'>
              <Input label='Full Name' color='teal'  type='name' name="user_name"
              onChange={(e)=>setfullname(e.target.value)}
              />
              </div>
              <div className='mb-4'>
              <Input label='Email' color='teal'  type='email'  name="user_email"
              onChange={(e)=>setemail(e.target.value)}
              />
              </div>
              <div className='mb-4'>
              <Textarea label='Message' color='teal'  type='text'  name="Message"
              onChange={(e)=>setmessage(e.target.value)}
              />
              </div>
             
              
               <Button className='bg-black text-white' type='submit' value="Send" onClick={handleSubmit}>Send</Button>
          </form>
              </div>
           </Container>
       
      
    </div>
  )
}

export default Contactform