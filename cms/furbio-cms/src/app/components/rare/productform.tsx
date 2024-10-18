import React from "react";

const ProductForm = () => {
  return (
    <div className="w-full mx-28 my-28 flex flex-col gap-4">
      <h1 className="text-2xl">Add a New Product</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Title"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Product Price"
          className="p-2 border border-gray-300"
        />
        <select className="p-2 border border-gray-300">
          <option value="">Select Size</option>
          <option value="">Medium</option>
          <option value="">Large</option>
        </select>
        <select className="p-2 border border-gray-300">
          <option value="">Select Tags</option>
          <option value="">Tag 1</option>
          <option value="">Tag 2</option>
        </select>
        <select className="p-2 border border-gray-300">
          <option value="">Select Color</option>
          <option value="">Red</option>
          <option value="">Blue</option>
        </select>
        <select className="p-2 border border-gray-300">
          <option value="">Select Origin</option>
          <option value="">Nepal</option>
          <option value="">India</option>
        </select>
        <input
          type="text"
          placeholder="Model Number"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Material"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Shape"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Load Capacity"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Product Weight"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Product Height"
          className="p-2 border border-gray-300"
        />
        <input
          type="text"
          placeholder="Product Width"
          className="p-2 border border-gray-300"
        />
        <textarea
          placeholder="Product Description"
          className="p-2 border border-gray-300 h-40"
        ></textarea>
        <input type="file" className="p-2" />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
