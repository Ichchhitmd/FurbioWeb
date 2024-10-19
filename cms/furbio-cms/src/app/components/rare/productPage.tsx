import React, { useState } from "react";
import { GlobalCard } from "../common/card";
import { AddButton } from "../common/addIcon";
import ProductForm from "./productform";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  switch (currentView) {
    case "addProducts":
      return <ProductForm />;
  }
  const handleClick = () => {
    setCurrentView("addProducts");
    setIsClicked(true);
  };
  return (
    <div className="p-20 relative w-full">
      <GlobalCard
        containerClassnames=""
        title="chair"
        description="A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest."
      ></GlobalCard>
      <div
        className={`absolute bottom-10 right-12 ${isClicked ? "block" : ""}`}
      >
        <AddButton containerClassnames="relative">
          <div className="text-black absolute bottom-14 right-0 mt-2 bg-white p-2 border rounded shadow-md w-40" onClick={handleClick}>
            Add Product
          </div>
        </AddButton>
      </div>
    </div>
  );
};
