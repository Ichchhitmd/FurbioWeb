import { AddButton } from "@/app/components/common/button";
import { GlobalCard } from "@/app/components/common/card";
import BlogForm from "@/app/components/rare/blogform";
import React, { useState } from "react";

export const BlogPage = () => {
  const [currentView, setCurrentView] = useState<string>("globalCard"); // Default view is GlobalCard

  const handleClick = () => {
    setCurrentView("addBlogs");
  };

  const handleBack = () => {
    setCurrentView("globalCard"); // Navigate back to GlobalCard when back button is clicked
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
          <div className="absolute bottom-10 right-12">
            <AddButton containerClassnames="relative" title="Add Blog">
              <div
                className="text-black absolute bottom-14 right-0 mt-2 bg-white p-2 border rounded shadow-md w-40"
                onClick={handleClick}
              >
                Add Blog
              </div>
            </AddButton>
          </div>
        </>
      )}

      {currentView === "addBlogs" && <BlogForm handlePress={handleBack} />}
    </div>
  );
};
