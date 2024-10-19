import { CloseIcon } from '@/app/assets/icons/svgIcon'
import React from 'react'

interface CategoryFormProps {
  closeMiniAdder: () => void
}

const CategoryForm: React.FC<CategoryFormProps> = ({closeMiniAdder}) => {
  return (
    <div className="w-full max-w-md mx-auto border-4 border-gray-300 bg-white rounded-lg shadow-lg relative p-6">
    <div className="absolute top-4 right-4">
      <button onClick={closeMiniAdder} className="text-gray-600 hover:text-gray-900 transition duration-200">
        <CloseIcon className="w-8 h-8" />
      </button>
    </div>
  
    <div className="px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add a New Blog Category</h1>
  
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Category"
          className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
  
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default CategoryForm