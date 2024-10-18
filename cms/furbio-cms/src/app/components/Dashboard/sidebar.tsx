"use client";

import Image from "next/image";
import React from "react";
import { DashboardButton } from "../common/button";
import images from "@/app/constant/images";

interface SideBarProps {
  onNavigate: (view: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onNavigate }) => {
  return (
    <div className="w-[20%] bg-indigo-300 h-screen">
      <div className="flex justify-center my-5 ">
        <Image src={images.yellowsofa} width={200} height={200} alt="logo" />
      </div>
      <div className="flex flex-col justify-center items-center gap-14">
        <DashboardButton
          title="Dashboard"
          handlePress={() => onNavigate("dashboard")}
        >
          Dashboard
        </DashboardButton>
        <DashboardButton
          title="Add Blogs"
          handlePress={() => onNavigate("addBlogs")}
        >
          Add Blogs
        </DashboardButton>
        <DashboardButton
          title="Add Products"
          handlePress={() => onNavigate("addProducts")}
        >
          Add Products
        </DashboardButton>
        <DashboardButton
          title="View Stats"
          handlePress={() => onNavigate("viewStats")}
        >
          View Stats
        </DashboardButton>
        <DashboardButton
          title="Add Category"
          handlePress={() => onNavigate("addCategory")}
        >
          Logout
        </DashboardButton>
      </div>
    </div>
  );
};

export default SideBar;
