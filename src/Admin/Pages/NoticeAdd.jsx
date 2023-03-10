import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert} from '@mui/material';
import {Textarea,Input} from '@material-tailwind/react'
import dbdataservice from '../../Operations';
const NoticeAdd = ({id, setNoticeId}) => {
  const [Notice, setNotice] = useState();
  const [designation, setDesignation] = useState();
  const [name, setName] = useState();
  const [Reff, setReff] = useState();
  const [TheDate, setTheDate] = useState();
  const [message, setmessage] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setmessage("");
      const newNotice= {
       designation,TheDate,Notice,Reff,name
      };
      try {
        if (id !== undefined && id !== "") {
          await dbdataservice.updateNotice(id, newNotice);
          setNoticeId("");
          setmessage({ error: false, msg: "Updated successfully!" });
          setTimeout(() => {
            navigate('/Dashboard');
        }, 3000);
        } else {
          await dbdataservice.addNotice(newNotice);
          setmessage({ error: false, msg: "New Notice added successfully!" });
          setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
        }
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }
    };
    const editHandler = async () => {
      setmessage("Details successfully edited");
      try {
        const docSnap = await dbdataservice.getOccupant(id);
        setDesignation(docSnap.data().designation);
        setNotice(docSnap.data().Notice);
        setTheDate(docSnap.data().TheDate);
        setReff(docSnap.data().Reff);
        setName(docSnap.data().name);
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }
     setTheDate(''); setNotice('');setReff("");setName(""); setDesignation('')
    };
    useEffect(() => {
      if (id !== undefined && id !== "") {
        editHandler();
      }   //eslint-disable-next-line
    }, [id]);
  return (
    <div>
       <div >
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
  <div className="text-center bg-gray-50 px-6 ">Add A Notice</div>
         <p className="italic text-sm text-red-300 text-center">students will be able to view these noties in their portal</p>
             <form onSubmit={handleSubmit} className='' >

                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Your Name' type='name'
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Desgnation ...Landlord/Caretaker' type='name'
                  value={designation} 
                  onChange={(e)=>setDesignation(e.target.value)}
                  />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Date Created' type='date'
                 value={TheDate} 
                 onChange={(e)=>setTheDate(e.target.value)}
                 />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Rerence' type='text'
                 value={Reff} 
                 onChange={(e)=>setReff(e.target.value)}
                 />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Textarea    className='px-2' color='teal'  label='Notice' type='text'
                  value={Notice} 
                  onChange={(e)=>setNotice(e.target.value)}
                  />
                </div>
                   <div className=' flex justify-end'>
                        <button type='submit' className=' bg-gray-700 py-1 px-6 rounded-md text-white'>Submit</button>                                                                                                 
                   </div>
             </form>
           </div>
    </div>
  )
}

export default NoticeAdd