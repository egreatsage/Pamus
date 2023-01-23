
import { Alert } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineMail,AiOutlineLock, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext'
const StaffSignUp = () => {
  const {signUp} = useUserAuth();
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate();
 const handleSubmit = async (e)=>{
  e.preventDefault();
  setError("")
  try{
    await signUp(username, email,password);
      navigate('/staffprofile')
  }catch(err){
    setError("Problem Signing In")
          }  
      }
  return (
   <div>
      <div
      className="min-h-screen max-w-full flex flex-col items-center justify-center bg-white"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          md:py-8
          rounded-3xl
          w-full
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
         Staff Sign Up
        </div>
        <div>
          {error?.msg && (
         
                <Alert 
        color={error?.error?'error' :'info'}
        onClose={()=> setError('')}
        dismissible='true'
        >
          {''}
          {error?.msg}
        </Alert>
         
       
      )}
          </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
              <label
                
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <AiOutlineUser/>
                </div>

                <input
                  
                  type="name"
                  name="name"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your Username"
                  onChange={e=>setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
            
                className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <AiOutlineMail/>
                </div>

                <input
                  
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
               
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <AiOutlineLock/>
                  </span>
                </div>

                <input
                
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                <AiOutlineLogin/>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/login"
        
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span className="ml-2"
            >You have an account?
            <Link
              to="/stafflogin"
              className="text-xs ml-2 text-blue-500 font-semibold"
              >Login here</Link></span
          >
        </Link>
      </div>
    </div>

   </div>
  )
}
export default StaffSignUp