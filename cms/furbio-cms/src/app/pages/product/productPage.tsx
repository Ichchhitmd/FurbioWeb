import React, { useState } from "react";
import { GlobalCard } from "../../components/common/card";
import { AddButton } from "../../components/common/button";
import ProductForm from "../../components/rare/productform";
import MiniForm from "@/app/components/common/miniForm";
import { SizeData } from "@/app/types/products/sizeTypes";
import apiService from "@/app/config/services/products/sizeServices";
import productsServices from "@/app/config/services/products/productsServices";
import tagServices from "@/app/config/services/products/tagServices";
import {
  OriginAddRequest,
  TagAddRequest,
} from "@/app/types/products/productTypes";
import originServices from "@/app/config/services/products/originServices";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("ProductView");
  const [miniAdder, setMiniAdder] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    sizeName: "",
    colorName: "",
    tagName: "",
    originName: "",
  });

  const handleBack = () => {
    setCurrentView("ProductView");
  };

  const submitAddColor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.colorName) {
      return;
    }
    try {
      const addColor = await productsServices.postColor({
        color_name: formData.colorName,
      });
      console.log(addColor);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setCurrentView("addProducts");
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      sizeName: e.target.value,
    });
  };

  const handleSize = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: SizeData = {
      size_name: formData.sizeName,
    };

    try {
      const response = await apiService.createSize(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const resetField = () => {
    setFormData({
      tagName: "",
      sizeName: "",
      colorName: "",
      originName: "",
    });
  };
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      tagName: e.target.value,
    });
  };
  const handleTag = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: TagAddRequest = {
      tag_name: formData.tagName,
    };
    try {
      const response = await tagServices.createTag(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      originName: e.target.value,
    });
  };
  const handleOrigin = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: OriginAddRequest = {
      origin_name: formData.originName,
    };
    try {
      const response = await originServices.createOrigin(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            onSubmit={handleSize}
            closeMiniAdder={closeMiniAdder}
            title="Add Size"
            handleChange={handleSizeChange}
            value={formData.sizeName}
            placeholder="Size"
            resetFields={resetField}
          />
        )}
        {activeForm === "colorForm" && (
          <MiniForm
            closeMiniAdder={closeMiniAdder}
            title="Add Color"
            placeholder="Color"
            value={formData.colorName}
            handleChange={(e) =>
              setFormData({ ...formData, colorName: e.target.value })
            }
            onSubmit={submitAddColor}
            resetFields={resetField}
          />
        )}
        {activeForm === "tagForm" && (
          <MiniForm
            onSubmit={handleTag}
            closeMiniAdder={closeMiniAdder}
            handleChange={handleTagChange}
            value={formData.tagName}
            title="Add Tag"
            placeholder="Tag"
            resetFields={resetField}
          />
        )}
        {activeForm === "originForm" && (
          <MiniForm
            value={formData.originName}
            onSubmit={handleOrigin}
            handleChange={handleOriginChange}
            closeMiniAdder={closeMiniAdder}
            title="Add Origin"
            placeholder="Origin"
            resetFields={resetField}
          />
        )}
      </div>
    </div>
  );
};
