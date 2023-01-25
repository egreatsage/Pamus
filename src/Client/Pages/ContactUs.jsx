
import { Button} from '@mui/material'
import React from 'react'
import { FcPhone } from 'react-icons/fc'
import { MdMailOutline, MdMessage } from 'react-icons/md'
import Navbar from '../Components/Navbar'
import Contactform from './Contactform'

const Contact = () => {
  return (
    <div>
        <Navbar/>
    <div className="container my-24 mx-auto">
    <section className="mb-32 text-gray-800">
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
      </div>
      <div className="container text-gray-800 px-4 md:px-12">
        <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
            <div className="mb-12 lg:mb-0 text-center mx-auto">
          {/* map */}
            </div>
            <div className="mb-12 lg:mb-0 text-center mx-auto">
            <Button className='bg-transparent'><MdMessage className='text-2xl text-green-700' /></Button>
              <h6 className="font-medium">pamushostels@gmail.com</h6>
            </div>
            <div className="mb-6 md:mb-0 text-center mx-auto">
            <Button className='bg-transparent'><FcPhone className='text-2xl text-green-600'/></Button>
              <h6 className="font-medium">+254722820702</h6>
            </div>
            <div className="text-center mx-auto">
            <Button className='bg-transparent'><MdMailOutline className='text-2xl text-green-600' /></Button>
              <h6 className="font-medium">P.0 Box 1471-50200</h6>
            </div>
          </div>
          <div className="max-w-[900px] mx-auto">
          <Contactform/>
                   
          <div>
          </div>
          </div>
        </div>
      </div>
    </section>

  </div>
    </div>
  

  )
}

export default Contact