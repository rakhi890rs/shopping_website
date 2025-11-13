import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()

  const registerHandler = (user) => {
    user.id = nanoid()
    console.log(user)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(registerHandler)} className='flex flex-col w-1/2'>
      <input
        {...register("username")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="text"
        placeholder='Username'
      />

      <input
        {...register("email")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="email"
        placeholder='Email'
      />

      <input
        {...register("password")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="password"
        placeholder='Password'
      />

      <input
        {...register("confirmPassword")}
        className='mb-3 outline-0 border-b p-2 text-4xl'
        type="password"
        placeholder='Confirm Password'
      />

      <button type="submit">Register user</button>

      <p className='mt-3'>
        Already have an account? <Link to="/login" className='text-blue-500 underline'>Login</Link>
      </p>
    </form>
  )
}

export default Register
