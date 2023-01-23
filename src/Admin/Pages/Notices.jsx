import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import EmployeeDataService from '../../Operations'
export default function Notices() {
  useEffect(() => {
    getAllNotices();
  }, []);
  const getAllNotices = async () => {
    const data = await EmployeeDataService.getAllNotices();
    setNotices(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteNotice(id);
    getAllNotices();
  };
  const [notices, setNotices] = useState([]);
  return (
    <div>
       <div className='mb-5'>
              <h1 className='text-center text-2xl tracking-wider bold mb-4'>Notices</h1>
              {notices.map((doc,index )=>{
return(
              <div className="accordion" id="accordionExample">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className=" accordion-button collapsed relative flex items-center w-full py-4  px-5 text-base text-blue-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
       <span className='mr-4 text-black'>{index + 1}.</span>
       <p className='text-center'>{doc.Reff}</p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        <div className="flex text-sm justify-between mb-3 italic text-gray-800 underline">
            <span>By.{doc.Creator}</span>
            <span>Date.{doc.TheDate}</span>
        </div>
            <p>{doc.Notice}</p>
            <span className='flex justify-end my-3'><button onClick={(e) => deleteHandler(doc.id)}><AiFillDelete className='text-red-900'/></button></span>
          </div>
    </div>
  </div>
</div>
)
})}
              </div>
    </div>
  )
}
