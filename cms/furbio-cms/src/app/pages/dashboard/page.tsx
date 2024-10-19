"use client";
import { AddButton } from "../../components/common/button";
import { GlobalCard } from "@/app/components/common/card";
import SideBar from "@/app/components/Dashboard/sidebar";
import BlogForm from "@/app/components/rare/blogform";
import CategoryForm from "@/app/components/rare/categoryForm";
import { ProductPage } from "../product/productPage";
import StatsBox from "@/app/components/rare/statsBox";
import React, { useState } from "react";

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
        return <BlogForm />;
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
