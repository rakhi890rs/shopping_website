import React from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {register,reset,handleSubmit}=useForm()
  const loginhandler=()=>{
    user.id=nanoid();

  }
  return (
    <form onSubmit={handleSubmit(loginhandler)} className='flex flex-col w-1/2'>
        <input 
        {...register("username")}
        className='mb-3 outline-0 border-b p-2 text-4xl' 
        type="text" 
        placeholder='user name'/>

        <input 
        {...register("email")}
        className='mb-3 outline-0 border-b p-2 text-4xl' 
        type="email" 
        placeholder='email'/>
        <button>Login user</button>
       
    </form>
  )
}

export default Login