import React, { useState } from "react";
import { GlobalCard } from "../../components/common/card";
import { AddButton } from "../../components/common/button";
import ProductForm from "../../components/rare/productform";
import MiniForm from "@/app/components/common/miniForm";
import productsServices from "@/app/config/services/products/productsServices";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("ProductView");
  const [miniAdder, setMiniAdder] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    colorName: '',
  })

  const handleBack = () => {
    setCurrentView("ProductView");
  };

  const submitAddColor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.colorName) {
      return;
    }
    try{
      const addColor = await productsServices.postColor(
        {color_name: formData.colorName}
      )
      console.log(addColor)
    }catch(error){
      console.log(error)
    }
  };

  const handleClick = () => {
    setCurrentView("addProducts");
  };

  const handleFormOpen = (formType: string) => {
    setActiveForm(formType);
    setMiniAdder(true);
  };

  const closeMiniAdder = () => {
    setMiniAdder(false);
    setActiveForm(null);
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
          containerClassnames={`relative ${miniAdder ? "bg-red-200 pointer-events-none opacity-50 " : ""}`}
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
              onClick={() => handleFormOpen("sizeForm")}
            >
              Add Size
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleFormOpen("tagForm")}
            >
              Add Tag
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleFormOpen("originForm")}
            >
              Add Origin
            </div>
            <div
              className="text-black border solid border-shadow p-2 rounded-lg w-full hover:bg-indigo-800 hover:text-white"
              onClick={() => handleFormOpen("colorForm")}
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
        {activeForm === "sizeForm" && (
          <MiniForm
            closeMiniAdder={closeMiniAdder}
            title="Add Size"
            placeholder="Size"
          />
        )}
        {activeForm === "colorForm" && (
          <MiniForm
            closeMiniAdder={closeMiniAdder}
            title="Add Color"
            placeholder="Color"
            value={formData.colorName}
            handleChangeText={(e) => setFormData({ ...formData, colorName: e.target.value })}
            onClick={submitAddColor}
          />
        )}
        {activeForm === "tagForm" && (
          <MiniForm
            closeMiniAdder={closeMiniAdder}
            title="Add Tag"
            placeholder="Tag"
          />
        )}
        {activeForm === "originForm" && (
          <MiniForm
            closeMiniAdder={closeMiniAdder}
            title="Add Origin"
            placeholder="Origin"
          />
        )}
      </div>
    </div>
  );
};
