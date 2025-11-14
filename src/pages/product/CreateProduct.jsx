import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
 import { asynccreateproduct } from '../../store/action/productAction' // replace with your actual action

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const createHandler = (product) => {
    // dispatch(asyncCreateProduct(product))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(createHandler)}
      className='flex flex-col gap-4 w-1/2 mx-auto mt-10'
    >
      <input
        {...register('name')}
        type='text'
        placeholder='Product Name'
        className='border-b p-2 text-2xl outline-none'
      />

      <input
        {...register('description')}
        type='text'
        placeholder='Description'
        className='border-b p-2 text-2xl outline-none'
      />

      <input
        {...register('price')}
        type='number'
        placeholder='Price'
        className='border-b p-2 text-2xl outline-none'
      />

      <input
        {...register('category')}
        type='text'
        placeholder='Category'
        className='border-b p-2 text-2xl outline-none'
      />

      <input
        {...register('image')}
        type='text'
        placeholder='Image URL'
        className='border-b p-2 text-2xl outline-none'
      />

      <button
        type='submit'
        className='bg-blue-400 text-white px-4 py-2 rounded mt-5'
      >
        Create Product
      </button>
    </form>
  )
}

export default CreateProduct
