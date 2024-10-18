import React, { useState } from "react";
import { GlobalCard } from "../common/card";
import { AddButton } from "../common/addIcon";
import ProductForm from "./productform";

export const ProductPage = () => {
  const [currentView, setCurrentView] = useState<string>("");

  switch (currentView) {
    case "addProducts":
      return <ProductForm />;
  }
  return (
    <div className="p-20 relative w-full">
      <GlobalCard
        containerClassnames=""
        title="chair"
        description="A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest."
      ></GlobalCard>
      <div className="absolute bottom-10 right-10">
        <AddButton>
          <div
            className="text-black"
            onClick={() => setCurrentView("addProducts")}
          >
            Add Products
          </div>
        </AddButton>
      </div>
    </div>
  );
};
