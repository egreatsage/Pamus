
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Messages from './Messages'
import Notices from './Notices'
const Dashboard = () => {
  return (
    <div>
       <Nav/>
      <div className=''>
             <div>
              <div className="grid md:grid-cols-4 ml-3 mr-3  pb-6 pt-3">
                   <div className='shadow-md w-full h-40 bg-white md:w-48  md:h-48 rounded-md mb-5'>
                   <h1 className='ml-8 mt-7'>Occupants</h1>
                   <Link className='' to='/occupants'><button className='px-8 bg-gray-100 py-1 rounded-md'>View</button></Link>
                   </div>
                   <div className='shadow-md w-full h-40 bg-white md:w-48 md:h-48 rounded-md mb-5'>
                     <h1 className='ml-8 mt-7'> Bookings</h1>
                  <Link className='' to='/bookings'> <button className='px-8 bg-gray-100 py-1 rounded-md'>view</button></Link>
                   </div>
                   <div className='shadow-md w-full h-40 bg-white md:w-48 md:h-48 rounded-md mb-5'>
                   <div> <h1 className='ml-8 mt-7'>Staff</h1></div>
                   <div className='flex items-end py-1' > <Link to='/staff'><button className='px-8 bg-gray-100 py-1 rounded-md'>view</button></Link></div>
                   </div>
                   <div className='shadow-md w-full h-40 bg-white md:w-48 md:h-48 rounded-md mb-5'>
                    <h1 className='ml-8 mt-7'>Rooms</h1>
                  <Link className='' to='/rooms'><button className='px-8 bg-gray-100 py-1 rounded-md'>view</button></Link>
                   </div>  
            
              </div>
             </div>
             <div className="grid md:grid-cols-2 gap-4 ml-3 mr-3">
            <div>
              <Messages/>
            </div>

               <div>
                <Notices/>
               </div>
             </div>
     </div>
    </div>
  )
}

export default Dashboard