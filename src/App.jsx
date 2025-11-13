import React, { useEffect } from 'react'
import axios from './api/axiosconfig'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='text-white front-thin w-screen h-screen bg-gray-800'>
     <Nav/>
      <Mainroutes/>
    </div>

  )
}

export default App