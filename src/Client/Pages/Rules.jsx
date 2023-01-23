import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import dbdataservice from '../../Operations';

const Notices = () => {
  const [rules, setRules] = useState([]);
  useEffect(() => {
    getAllRules();
  }, []);
  const getAllRules = async () => {
    const data = await dbdataservice.getAllRules();
    setRules(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  return (
    <div>
        <Link className='pl-3 mb-4 mt-4' to='/userprofile'>
        <Button  className=' bg-gray-700 hover:bg-black font-extrabold text-white  py-2 rounded-md'>Back</Button>
        </Link>
      <div className='md:mx-9 md:px-9 md:my-6 mt-5   '>
      <h1 className='text-center mb-4 font-extrabold pt-3 underline'>Hostel Rules</h1>
      <div className='border border-black md:my-5 mx-1 rounded-sm'>
      {rules.map((doc,index)=>{
             return(
        <div className=' md:px-8 w-full mb-4 rounded-md md:my-6 '>
                    <p className=' my-3 mx-2'>
                     <span className='font-bold mr-3 ml-1'> {index + 1}:</span> {doc.rules}
                     </p>
                
        </div>
           )
          })}
      </div>
     
    </div>
    </div>
    
  )
}

export default Notices