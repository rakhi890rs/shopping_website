import React,{ useEffect } from 'react'
import axios from './api/axiosconfig'
import {asyncgetusers} from './store/userAction'

const App = () => {
 
  useEffect(()=>{
    asyncgetusers()
    // getproduct();     //useEffect() controls when the code should run.what 
  },[])
  return (
    <div className='bg-blue-500'>App</div>
  )
}

export default App