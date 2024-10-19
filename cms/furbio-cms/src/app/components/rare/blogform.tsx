import React from "react";
import { BackButton } from "../common/button";

interface BlogFormProps {
  handlePress: () => void;
}
const BlogForm: React.FC<BlogFormProps> = ({ handlePress }) => {
  return (
    <div className="">
      <div className="relative top-0 left-0">
        <BackButton handlePress={handlePress} />
      </div>

      <div className="w-full mx-8 my-12 flex flex-col gap-4">
        <h1 className="text-2xl">Add a New Blog</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="p-2 border border-gray-300"
          />
          <textarea
            placeholder="Blog Content"
            className="p-2 border border-gray-300 h-40"
          ></textarea>
          <input type="file" className="p-2" />
          <button type="submit" className="p-2 bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
