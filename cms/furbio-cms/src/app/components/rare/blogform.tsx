import React, { useEffect, useState } from "react";
import { BackButton } from "../common/button";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { AuthorTypesResponse } from "@/app/types/blogs/blogsTypes";
import blogsServices from "@/app/config/services/blogs/blogsServices";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogFormProps {
  handlePress: () => void;
}
const BlogForm: React.FC<BlogFormProps> = ({ handlePress }) => {
  const [content, setContent] = useState("");
  const [authors, setAuthor] = useState<AuthorTypesResponse[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);

  const fetchAuthors = async () => {
    try {
      const response = await blogsServices.getAllAuthors();
      if (response) {
        setAuthor(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    fetchAuthors()
  },[])

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setSelectedAuthor(selectedId);
  };

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className=" bg-transparent flex flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="absolute top-4 left-4">
          <BackButton handlePress={handlePress} title="Back">
            Back
          </BackButton>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Add a New Blog
          </h1>
          <p className="text-gray-500">
            Share your latest thoughts and updates!
          </p>
        </div>

        <form className="space-y-8">
          <div className="flex gap-6">
            <input
              type="text"
              required
              placeholder="Blog Title"
              className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <select
              required
              className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Business">Business</option>
            </select>
          </div>
                  <select
                  id="author-select"
                  value={selectedAuthor || ""}
                  onChange={handleAuthorChange}
                    required
                    className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="" disabled>Select Author</option>
                    {authors.map((author) => (
                      <option key={author.author_id} value={author.author_id}>
                        {author.name}
                      </option>
                    ))}
                  </select>

          <div>
            <ReactQuill
              value={content}
              className="h-40 bg-white rounded-lg focus:ring-2 focus:ring-blue-500"
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
          </div>


          <div className="">
            <input
              type="file"
              className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none mt-8"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
