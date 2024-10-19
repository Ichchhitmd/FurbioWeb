import { AddIcon, BackIcon } from "@/app/assets/icons/svgIcon";
import React, { useState } from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  title: string;
  handlePress?: () => void;
  containerClassnames?: string;
  disabled?: boolean;
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
  disabled,
}: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="">
      <button
        className={`${containerClassnames}bg-red-600 hover:bg-red-500 rounded-full w-10 h-10 px-2 group`}
        onClick={toggleHover}
        disabled={disabled}
      >
        <AddIcon className="w-6 h-5 text-white" />
        {isHovered && <div className="">{children}</div>}
      </button>
    </div>
  );
};

export const BackButton = ({ handlePress }: CustomButtonProps) => {
  return (
    <div>
      <button onClick={handlePress}>
        <BackIcon className="w-14 h-14" />
      </button>
    </div>
  );
};
