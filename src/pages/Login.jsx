import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

const Login = () => {
  const { register, reset, handleSubmit } = useForm()

  const loginhandler = (user) => {
    // user.id = nanoid()
    console.log(user)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(loginhandler)} className='flex flex-col w-1/2'>
      
      

      <input
        {...register("email")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="email"
        placeholder='email'
      />

      <input
        {...register("password")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="password"
        placeholder='password'
      />

      <button type="submit">Login user</button>

      <p className='mt-3'>
        Don't have an account? <Link to="/register" className='text-blue-500 underline'>Register</Link>
      </p>
    </form>
  )
}

export default Login
