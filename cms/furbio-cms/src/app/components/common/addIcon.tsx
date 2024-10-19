import { AddIcon } from "@/app/assets/icons/svgIcon";
import React, { useState } from "react";

interface AddIconProps {
  children: React.ReactNode;
  handlePress?: () => void;
  containerClassnames?: string;
}
export const AddButton = ({ containerClassnames, children }: AddIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <button
        className={`${containerClassnames} bg-red-800 hover:bg-white rounded-3xl w-10 h-10 px-2 group`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <AddIcon className="w-5 h-5 text-white group-hover:text-black" />
        {isHovered && (
          <div className="absolute mt-2 bg-white p-2 border rounded shadow-md w-40">
            {children}
          </div>
        )}
      </button>
    </div>
  );
};
