import { AddButton } from "@/app/components/common/button";
import { GlobalCard } from "@/app/components/common/card";
import BlogForm from "@/app/components/rare/blogform";
import CategoryForm from "@/app/components/rare/categoryForm";
import React, { useState } from "react";

export const BlogPage = () => {
  const [currentView, setCurrentView] = useState<string>("globalCard"); 
  const [miniAdder, setMiniAdder] = useState<boolean>(false);

  const handleClick = () => {
    setCurrentView("addBlogs");
  };

  const handleClickCategory = () => {
    setMiniAdder(true)
  };


  const closeMiniAdder = () => {
    setMiniAdder(false)
  }

  const handleBack = () => {
    setCurrentView("globalCard");
  };

  return (
    <div className="p-20 relative w-full">
      {currentView === "globalCard" && (
        <>
          <GlobalCard
            containerClassnames=""
            title="Dota 2"
            description="Dota 2 is a MOBA, Its addictive yet really good computer game."
          />
        </>
            )}
          <div className="absolute bottom-10 right-12 ">
            <AddButton containerClassnames={`relative ${miniAdder ? 'bg-red-200 cursor-not-allowed pointer-events-none ' : ''}`} title="Add Blog" disabled={miniAdder}>
              <div
                className="text-black absolute bottom-14 right-0 mt-2 bg-white p-2 border rounded shadow-md w-40 flex flex-col gap-5 items-center justify-center"
                
              >
                <div onClick={handleClickCategory}>
                  Add Category
                </div>
                <div onClick={handleClick}>
                Add Blog
                </div>
              </div>
              <div>

              </div>
            </AddButton>
          </div>

    

      {currentView === "addBlogs" && <BlogForm handlePress={handleBack} />}
      <div className="absolute bottom-28 right-10">

      {miniAdder && <CategoryForm closeMiniAdder={closeMiniAdder}/>}
      </div>
    </div>
  );
};
