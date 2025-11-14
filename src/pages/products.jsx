import React, { useEffect, useState } from 'react'
import axios from '../api/axiosconfig'  // make sure this path is correct
// axiosconfig should already have baseURL: "http://localhost:3001"

const Products = () => {
  const [products, setProducts] = useState([])

  // Fetch products
  const getProducts = async () => {
    try {
      const res = await axios.get("/product")
      setProducts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-6 p-10'>
      {products.map((item) => (
        <div key={item.id} className='p-4 border rounded shadow-sm'>
          <img 
            src={item.image}
            alt={item.name}
            className='w-full h-40 object-cover rounded'
          />
          <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
          <p className='text-gray-600'>{item.description}</p>
          <p className='text-lg font-bold mt-2'>₹{item.price}</p>
          <p className='text-sm text-blue-600 mt-1'>{item.category}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products
