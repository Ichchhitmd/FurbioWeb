import React from 'react'

const CategoryForm = () => {
  return (
    <div className='flex w-full gap-5'>

    <div className='w-full mx-28 my-28'>
            <h1 className='text-2xl'>Add a New Blog Category</h1>
            <form className='flex flex-col gap-5'>
              <input type='text' placeholder='Category' className='p-2 border border-gray-300' />
             
              <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
            </form>
          </div>
          <div className='w-full mx-28 my-28'>
            <h1 className='text-2xl'>Add a New Product Category</h1>
            <form className='flex flex-col gap-4'>
              <input type='text' placeholder='Category' className='p-2 border border-gray-300' />
             
              <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
            </form>
          </div>

    </div>
  )
}

export default CategoryForm