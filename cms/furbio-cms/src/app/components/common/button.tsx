import { AddIcon } from "@/app/assets/icons/svgIcon";
import React, { useState } from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  title: string;
  handlePress?: () => void;
  containerClassnames?: string;
}
export const DashboardButton = ({
  title,
  handlePress,
  containerClassnames,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handlePress}
      className={`${containerClassnames} w-32 h-6 flex justify-center items-center bg-transparent hover:bg-indigo-800 hover:text-white`}
    >
      {title}
    </button>
  );
};

export const AddButton = ({
  containerClassnames,
  children,
}: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <button
        className={`${containerClassnames}bg-indigo-600 hover:bg-indigo-800 rounded-md w-10 h-10 px-2 group`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <AddIcon className="w-5 h-5 group-hover:text-white" />
        {isHovered && (
          <div className="absolute mt-2 bg-white p-2 border rounded shadow-md w-40">
            {children}
          </div>
        )}
      </button>
    </div>
  );
};
