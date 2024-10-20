import React, { useEffect, useState } from "react";
import { BackButton } from "../common/button";
import dynamic from "next/dynamic";
import apiService from "@/app/config/services/products/sizeServices";
import { SizeResponse } from "@/app/types/products/sizeTypes";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface ProductFormProps {
  handlePress: () => void;
}
const ProductForm: React.FC<ProductFormProps> = ({ handlePress }) => {
  const [content, setContent] = useState("");
  const [sizes, setSizes] = useState<SizeResponse[]>([]);
  const handleChange = (value: string) => {
    setContent(value);
  };

  const fetchSize = async () => {
    try {
      const response = await apiService.getSizes();
      setSizes(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching sizes", error);
    }
  };

  useEffect(() => {
    fetchSize();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 bg-white shadow-lg rounded-lg p-8">
      <div className="">
        <BackButton handlePress={handlePress} title="Back">
          Back
        </BackButton>
      </div>
      <h1 className="text-2xl text-center font-semibold">Add a New Product</h1>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-10 ">
          <input
            type="text"
            placeholder="Product Title"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Product Price"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Model Number"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-3 gap-10">
          {" "}
          <input
            type="text"
            placeholder="Material"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Shape"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Load Capacity"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-3 gap-10">
          <input
            type="text"
            placeholder="Product Weight"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Product Height"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Product Width"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5">
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="" disabled>
              Select Size
            </option>
            {sizes.map((size) => (
              <option key={size.size_id} value={size.size_name}>
                {size.size_name}
              </option>
            ))}
          </select>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Select Tags</option>
            <option value="">Tag 1</option>
            <option value="">Tag 2</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Select Color</option>
            <option value="">Red</option>
            <option value="">Blue</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Select Origin</option>
            <option value="">Nepal</option>
            <option value="">India</option>
          </select>
        </div>

        <div className="grid grid-row-2 gap-16">
          <ReactQuill
            value={content}
            className="h-40 rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            placeholder="Write your blog content here..."
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ align: [] }],
                ["link"],
                ["clean"],
              ],
            }}
          />

          <input
            type="file"
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
