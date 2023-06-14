import React from 'react'
import Sidebar from './Sidebar'
import Mainpage from './Mainpage'
export default function Homepage() {
  return (
   <div className='h-screen flex '>
   <Sidebar/>
   <Mainpage/>
   </div>
  )
}
