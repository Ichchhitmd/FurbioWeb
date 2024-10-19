import React, { useState } from "react";
import { GlobalCard } from "../../components/common/card";
import { AddButton } from "../../components/common/button";
import ProductForm from "../../components/rare/productform";
import { ColorPage, OriginPage, SizePage, TagPage } from "./sizePage";
import { CrossIcon } from "@/app/assets/icons/svgIcon";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("");

  if (currentView === "addProducts") {
    return <ProductForm />;
  }

  const handleClick = (view: string) => {
    if (view === "addProducts") {
      setCurrentView("addProducts");
    } else {
      setCurrentView(view);
    }
  };

  return (
    <div className="p-20 relative w-full">
      <GlobalCard
        containerClassnames=""
        title="chair"
        description="A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest."
      />
      <div className={`absolute bottom-28 right-28 `}>
        <AddButton containerClassnames="">
          <div className="flex flex-col gap-4">
            <div
              className="text-black border solid border-shadow p-2 rounded-lg hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClick("addProducts")}
            >
              Add Product
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClick("addSize")}
            >
              Add Size
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClick("addTag")}
            >
              Add Tag
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClick("addOrigin")}
            >
              Add Origin
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClick("addColor")}
            >
              Add Color
            </div>
          </div>
        </AddButton>
        {currentView && (
          <div className="w-56 relative bg-gray-800 bg-opacity-50 ">
            <div className="bg-white absolute p-10 rounded-lg shadow-lg  left-0">
              <button className="" onClick={() => setCurrentView("")}>
                <CrossIcon className=" w-10 h-10 hover:text-white hover:bg-indigo-600 rounded-lg " />
              </button>
              {currentView === "addProducts" && <ProductForm />}
              {currentView === "addSize" && <SizePage />}
              {currentView === "addOrigin" && <OriginPage />}
              {currentView === "addColor" && <ColorPage />}
              {currentView === "addTag" && <TagPage />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
