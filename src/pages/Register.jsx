import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../store/action/userAction' 
const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const registerHandler = (user) => {
    user.id = nanoid()
    console.log(user)
    dispatch(asyncRegisterUser(user))  
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className='flex flex-col w-1/2 mx-auto mt-10'
    >
      <input
        {...register('username')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='text'
        placeholder='Username'
      />

      <input
        {...register('email')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='email'
        placeholder='Email'
      />

      <input
        {...register('password')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='password'
        placeholder='Password'
      />

      <input
        {...register('confirmPassword')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='password'
        placeholder='Confirm Password'
      />

      <button className='mt-5 px-4 py-2 bg-blue-400 text-white rounded'>
        Register user
      </button>

      <p className='mt-3 text-center'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-500 underline'>
          Login
        </Link>
      </p>
    </form>
  )
}

export default Register
