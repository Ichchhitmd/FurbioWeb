import React, { useState } from "react";
import { GlobalCard } from "../../components/common/card";
import { AddButton } from "../../components/common/button";
import ProductForm from "../../components/rare/productform";
import MiniForm from "@/app/components/common/miniForm";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("ProductView");
  const [miniAdder, setMiniAdder] = useState<boolean>(false);
  const [smallForm, setSmallForm] = useState<string[]>([]);

  const handleBack = () => {
    setCurrentView("ProductView");
  };

  const handleClick = () => {
    setCurrentView("addProducts");
  };

  const handleClickOptions = (option: string) => {
    setMiniAdder(true);
    setSmallForm((previous) => [...previous, option]);
  };

  const closeMiniAdder = (index: number) => {
    setSmallForm((prevForms) => prevForms.filter((_, i) => i !== index));
    if (smallForm.length === 1) {
      setMiniAdder(false);
    }
  };

  return (
    <div className="p-20 relative w-full">
      {currentView === "ProductView" && (
        <GlobalCard
          containerClassnames=""
          title="chair"
          description="A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest."
        />
      )}
      <div className="absolute bottom-10 right-12">
        <AddButton
          title="Add Product"
          containerClassnames={`relative ${miniAdder ? "bg-red-200 pointer-events-none " : ""}`}
          disabled={miniAdder}
        >
          <div className="text-black bottom-14 right-0 mt-2 bg-white p-2 border rounded shadow-md w-40 flex flex-col gap-5 absolute items-center justify-center">
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={handleClick}
            >
              Add Product
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClickOptions("Size")}
            >
              Add Size
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClickOptions("Tag")}
            >
              Add Tag
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClickOptions("Origin")}
            >
              Add Origin
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleClickOptions("Color")}
            >
              Add Color
            </div>
          </div>
        </AddButton>
      </div>
      {currentView === "addProducts" && (
        <ProductForm handlePress={handleBack} />
      )}
      <div className="absolute bottom-28 right-10">
        {miniAdder &&
          smallForm.map((content, index) => {
            return (
              <MiniForm
                key={index}
                closeMiniAdder={() => closeMiniAdder(index)}
                title={content}
              />
            );
          })}
      </div>
    </div>
  );
};
