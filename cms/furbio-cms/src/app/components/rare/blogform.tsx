import React from 'react'

const BlogForm = () => {
  return (
    <div className='w-full mx-28 my-28 flex flex-col gap-4'>
    <h1 className='text-2xl'>Add a New Blog</h1>
    <form className='flex flex-col gap-4'>
      <input type='text' placeholder='Blog Title' className='p-2 border border-gray-300' />
      <textarea placeholder='Blog Content' className='p-2 border border-gray-300 h-40'></textarea>
      <input type='file' className='p-2' />
      <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
    </form>
  </div>  )
}

export default BlogForm;