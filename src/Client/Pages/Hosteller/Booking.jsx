import React, { useState} from 'react'
import { Input,} from "@material-tailwind/react";
import dbdataservice from '../../../Operations';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material'
import { useUserAuth } from '../../../Context/UserAuthContext';
import Navbar from '../../Components/Navbar';
const Booking = () => {
    const {user} = useUserAuth();
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [PNumber, setPNumber] = useState('');
    const [email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [Age, setAge] = useState('');
    const [PGContact, setPGContact] = useState('');
    const [PGName, setPGName] = useState('');
    const [EName, setEName] = useState('');
    const [EContact, setEContact] = useState('');
    const [Relation, setRelation] = useState('');
    const [Institution, setInstitution] = useState('');
    const [YearOfStudy, setYearOfStudy] = useState('');
    const [MaritalStatus, setMaritalStatus] = useState('');
    const [Homecounty, setHomecounty] = useState('');
    const [message, setmessage] = useState({error: false, msg:''})
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let userId = user.uid;
      setmessage("");
      if (FName === "" || LName === "") {
        setmessage({ error: true, msg: "All fields are mandatory!" });
        return;
      }
      const newBooking = {
       FName,LName,Gender,PNumber,PGContact,Age,PGName,
       EName,EContact,Relation,Institution,YearOfStudy,
       MaritalStatus,Homecounty,userId,email
      };
      console.log(newBooking);
      try {
          await dbdataservice.addBooking(newBooking);
          setmessage({ error: false, msg: "New Details added successfully!" });
            navigate('/reply');
      } catch (err) {
        setmessage({ error: true, msg: err.message });
      }
      setFName(""); setLName("");setGender("");setPGContact("");setPNumber("");
      setAge("");setPGName(""); setEName(''); setEContact(''); setRelation(''); 
      setInstitution(''); setMaritalStatus('');
      setYearOfStudy(''); setHomecounty('');setEmail("");
      
    };
  return (
    <div className='bg-[#f2f2fa]' >
        <Navbar/>
      <div className="justify-end">
      </div>
         <form  onSubmit={handleSubmit} >
          <div>
          <div>
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
          </div>
          <p className='text-xl md:text-3xl text-center'>Fill in the following Details to book a room</p>
   
 <div className=' mt-10 mb-4  bg-[#f2f2fa] rounded-md'>
 <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 mt-6 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-600">Fill In The Personal Detailers Below.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-6  md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="First Name"  
                   className="mt-1 focus:ring-blue-500 focus:border-blue-500 block 
                  w-full
                   shadow-sm sm:text-sm border-gray-500 rounded-md"
                   type='name'
                   value={FName}
                   onChange={(e)=>setFName(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Last Name"   className="mt-1
                   focus:ring-blue-500 focus:border-blue-500 block w-full
                    shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type='name'
                     value={LName} 
                     onChange={(e)=>setLName(e.target.value)} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Phone Number" type="text"  
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={PNumber} 
                  onChange={(e)=>setPNumber(e.target.value)}
                  />
                </div>
                
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <Input  label="Email Address" type="email" className="mt-1
                   focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
                   sm:text-sm border-gray-300 rounded-md"
                   value={email} 
                   onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Home County" type="text"  
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full 
                  shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={Homecounty} 
                  onChange={(e)=>setHomecounty(e.target.value)}/>
                </div>
                
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <Input  label="Age" type="number" className="mt-1
                   focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
                   sm:text-sm border-gray-300 rounded-md"
                   value={Age} 
                   onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Input  label="Gender" type="text" className="mt-1
                   focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
                   sm:text-sm border-gray-300 rounded-md"
                   value={Gender} 
                   onChange={(e)=>setGender(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Input  label="Marital Status" type="text" className="mt-1
                   focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm 
                   sm:text-sm border-gray-300 rounded-md"
                   value={MaritalStatus} 
                   onChange={(e)=>setMaritalStatus(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
<div className=' mt-10 mb-4 p-4  bg-[#f2f2fa]  rounded-md'>
 <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Parent/Guardian Information</h3>
          <p className="mt-1 text-sm text-gray-600">Fill In The Details Below.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white shadow-lg sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Full Name" type="text"
                  className="mt-1 focus:ring-blue-500
                    focus:border-blue-500 block w-full
                   shadow-sm sm:text-sm border-gray-500 rounded-md"
                   value={PGName} 
                   onChange={(e)=>setPGName(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                 
                  <Input  label="Phone Number" type="text"  className="mt-1
                    focus:ring-blue-500 focus:border-blue-500 block w-full 
                    shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={PGContact} 
                    onChange={(e)=>setPGContact(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
<div className=' mt-10 mb-4 p-4  bg-[#f2f2fa] rounded-md'>
 <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Emergency Information</h3>
          <p className="mt-1 text-sm text-gray-600">Fill In The Details Below.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Full Name" type="text" 
                  className="mt-1 focus:ring-blue-500
                    focus:border-blue-500 block w-full
                   shadow-sm sm:text-sm border-gray-500 rounded-md"
                   value={EName} 
                   onChange={(e)=>setEName(e.target.value)}/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                 
                  <Input  label="Phone Number" type="text" 
                   id="phonenumber" className="mt-1
                    focus:ring-blue-500 focus:border-blue-500 block w-full 
                    shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={EContact} 
                    onChange={(e)=>setEContact(e.target.value)}/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Relation" type='text'  
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full
                   shadow-sm sm:text-sm border-gray-300 rounded-md"
                   value={Relation} 
                   onChange={(e)=>setRelation(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</div>
<div className=' mt-10 mb-4 p-4  bg-[#f2f2fa] rounded-md'>
 <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Academic Information</h3>
          <p className="mt-1 text-sm text-gray-600">Fill In The Details Below.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input  label="Current Year Of Study e.g First Year" type="text"  className="mt-1
                    focus:ring-blue-500 focus:border-blue-500 block w-full
                   shadow-sm sm:text-sm border-gray-500 rounded-md"
                   value={YearOfStudy} 
                   onChange={(e)=>setYearOfStudy(e.target.value)} 
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                 
                  <Input  label="Current Institution Of Study" type="text" 
                  
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block
                   w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                   value={Institution} 
                   onChange={(e)=>setInstitution(e.target.value)} 
                   />
                </div>      
              </div>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</div>
<div>
  
  </div>
</div>
             <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border 
              border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600
               hover:bg-blue-700 focus:outline-blue focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
            </div>
          </form>

         <div>
      
         </div>
         
    </div>
  )
}

export default Booking