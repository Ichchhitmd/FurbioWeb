"use client";
import SideBar from "@/app/components/Dashboard/sidebar";
import CategoryForm from "@/app/components/common/miniForm";
import StatsBox from "@/app/components/rare/statsBox";
import React, { useState } from "react";
import { BlogPage } from "../blog/page";
import { GlobalCard } from "@/app/components/common/card";
import { AddButton } from "@/app/components/common/button";
import { ProductPage } from "../product/productPage";

const Dashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("dashboard"); // State to track current view

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <div className="w-full flex mx-28 my-28 gap-10">
            <StatsBox title="Total Blogs" value={0} />
            <StatsBox title="Total Products" value={0} />
            <GlobalCard
              containerClassnames=""
              title="Blogs"
              description="newest Blog"
            ></GlobalCard>
            <AddButton>
              <div> add Cateegory</div>
            </AddButton>
          </div>
        );
      case "addBlogs":
        return <BlogPage />;
      case "addCategory":
        return <CategoryForm />;
      case "addProducts":
        return <ProductPage />;
      default:
        return (
          <div className="w-full mx-28 my-28">
            Chart hunchha ya chai babal wala
          </div>
        );
    }
  };

  return (
    <div className="flex">
      <SideBar onNavigate={setCurrentView} />
      {renderContent()}
    </div>
  );
};

export default Dashboard;
