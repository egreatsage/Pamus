import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert} from '@mui/material';
import {Input} from '@material-tailwind/react'
import dbdataservice from '../../Operations';
const AddRoomType = ({id, setRoomId}) => {
  const [Sharing, setSharing] = useState();
  const [Price, setPrice] = useState();
  const [Desc, setDesc] = useState();

  const [message, setmessage] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setmessage("");
      const newRoomType= {
       Sharing,Price,Desc
      };

    try {
        if (id !== undefined && id !== "") {
          await dbdataservice.updateRoom(id, newRoomType);
          setRoomId("");
          setmessage({ error: false, msg: "Updated successfully!" });
          setTimeout(() => {
            navigate('/');
        }, 3000);
        } else {
          await dbdataservice.addRoomType(newRoomType);
          setmessage({ error: false, msg: "New RoomType added successfully!" });
          setTimeout(() => {
            navigate('/');
        }, 3000);
        }
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }
    };
    const editHandler = async () => {
      setmessage("Details successfully edited");
      try {
        const docSnap = await dbdataservice.getRoomType(id);
        setSharing(docSnap.data().Sharing);
        setPrice(docSnap.data().Price);
        setDesc(docSnap.data().Desc);
       
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }
     setSharing(''); setPrice('');setDesc("");
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
  <div className="text-center bg-gray-50 px-6 ">Add Room Type</div>
       
             <form onSubmit={handleSubmit} className='' >

                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Sharing Type' type='name'
                  value={Sharing} 
                  onChange={(e)=>setSharing(e.target.value)}
                  />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Room Price' type='name'
                  value={Price} 
                  onChange={(e)=>setPrice(e.target.value)}
                  />
                </div>
                <div className='mx-3 my-3 mb-4'>
                <Input  className='px-2' color='teal'  label='Short Description' type='text'
                 value={Desc} 
                 onChange={(e)=>setDesc(e.target.value)}
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

export default AddRoomType