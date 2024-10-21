import { AddButton } from "@/app/components/common/button";
import { GlobalCard } from "@/app/components/common/card";
import BlogForm from "@/app/components/rare/blogform";
import React, { useState } from "react";
import MiniForm from "@/app/components/common/miniForm";
import blogsServices from "@/app/config/services/blogs/blogsServices";

export const BlogPage = () => {
  const [currentView, setCurrentView] = useState<string>("BlogView");
  const [miniAdder, setMiniAdder] = useState<boolean>(false);
  const [miniAuthorAdder, setMiniAuthorAdder] = useState<boolean>(false);
  const [authorFormData, setAuthorFormData] = useState({
    name: "",
    bio: "",
  });
  const [categoryFormData, setCategoryFormData] = useState({
    name: "",
    description: "",
  });

  const submitAddAuthor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!authorFormData.name) {
      return;
    }
    try {
      const addAuthor = await blogsServices.postAuthor({
        name: authorFormData.name,
        bio: authorFormData.bio,
      });
      console.log(addAuthor);
    } catch (error) {
      console.log(error);
    }
  };

  const submitAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("katyio");
    try {
      const addCategory = await blogsServices.createCategory({
        name: categoryFormData.name,
        description: categoryFormData.description,
      });
      console.log(addCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const resetCategoryFields = () => {
    setCategoryFormData({
      name: "",
      description: "",
    });
  };
  const resetAuthorFields = () => {
    setAuthorFormData({
      name: "",
      bio: "",
    });
  };

  const handleClick = () => {
    setCurrentView("addBlogs");
  };

  const handleClickCategory = () => {
    setMiniAdder(true);
  };

  const closeCategoryMiniAdder = () => {
    setMiniAdder(false);
  };

  const handleClickAuthor = () => {
    setMiniAuthorAdder(true);
  };

  const closeMiniAuthorAdder = () => {
    setMiniAuthorAdder(false);
  };

  const handleBack = () => {
    setCurrentView("BlogView");
  };

  return (
    <div className="p-20 relative w-full">
      {currentView === "BlogView" && (
        <>
          <GlobalCard
            containerClassnames=""
            title="Dota 2"
            description="Dota 2 is a MOBA, Its addictive yet really good computer game."
          />
        </>
      )}
      <div className="absolute bottom-10 right-12 ">
        <AddButton
          containerClassnames={`relative ${
            miniAdder || miniAuthorAdder
              ? "bg-red-200 cursor-not-allowed pointer-events-none opacity-50"
              : ""
          }`}
          title="Add Blog"
          disabled={miniAdder || miniAuthorAdder}
        >
          <div className="text-black absolute bottom-14 right-0 mt-2 bg-white p-2 border rounded shadow-md w-40 flex flex-col gap-5 items-center justify-center">
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={handleClickCategory}
            >
              Add Category
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={handleClickAuthor}
            >
              Add Author
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={handleClick}
            >
              Add Blog
            </div>
          </div>
        </AddButton>
      </div>

      {currentView === "addBlogs" && <BlogForm handlePress={handleBack} />}
      <div className="absolute bottom-28 right-10">
        {miniAdder && (
          <MiniForm
            title="Add New Category Here"
            showDescription={true}
            closeMiniAdder={closeCategoryMiniAdder}
            placeholder="Category"
            placeholderDescription="Description"
            value={categoryFormData.name}
            valueDescription={categoryFormData.description}
            handleChange={(e) =>
              setCategoryFormData({ ...categoryFormData, name: e.target.value })
            }
            handleChangeDescription={(e) =>
              setCategoryFormData({
                ...categoryFormData,
                description: e.target.value,
              })
            }
            onSubmit={submitAddCategory}
            resetFields={resetCategoryFields}
          />
        )}
        {miniAuthorAdder && (
          <MiniForm
            title="Add New Author Here"
            showDescription={true}
            closeMiniAdder={closeMiniAuthorAdder}
            placeholder="Author Name"
            value={authorFormData.name}
            valueDescription={authorFormData.bio}
            handleChange={(e) =>
              setAuthorFormData({ ...authorFormData, name: e.target.value })
            }
            handleChangeDescription={(e) =>
              setAuthorFormData({ ...authorFormData, bio: e.target.value })
            }
            onSubmit={submitAddAuthor}
            placeholderDescription="Bio"
            resetFields={resetAuthorFields}
          />
        )}
      </div>
    </div>
  );
};
