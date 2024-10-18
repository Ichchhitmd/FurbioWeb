import React from 'react'

const ProductForm = () => {
  return (
    <div className='w-full mx-28 my-28 flex flex-col gap-4'>
            <h1 className='text-2xl'>Add a New Product</h1>
            <form className='flex flex-col gap-4'>
              <input type='text' placeholder='Product Title' className='p-2 border border-gray-300' />
              <textarea placeholder='Product Description' className='p-2 border border-gray-300 h-40'></textarea>
              <input type='file' className='p-2' />
              <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
            </form>
          </div>
  )
}

export default ProductForm