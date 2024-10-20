import { AddButton } from "@/app/components/common/button";
import { GlobalCard } from "@/app/components/common/card";
import BlogForm from "@/app/components/rare/blogform";
import React, { useState } from "react";
import MiniForm from "@/app/components/common/miniForm";

export const BlogPage = () => {
  const [currentView, setCurrentView] = useState<string>("BlogView");
  const [miniAdder, setMiniAdder] = useState<boolean>(false);

  const handleClick = () => {
    setCurrentView("addBlogs");
  };

  const handleClickCategory = () => {
    setMiniAdder(true);
  };

  const closeMiniAdder = () => {
    setMiniAdder(false);
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
          containerClassnames={`relative ${miniAdder ? "bg-red-200 cursor-not-allowed pointer-events-none " : ""}`}
          title="Add Blog"
          disabled={miniAdder}
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
            closeMiniAdder={closeMiniAdder}
            placeholder="Category"
          />
        )}
      </div>
    </div>
  );
};
