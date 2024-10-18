import images from "@/app/constant/images";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;

  containerClassnames?: string;
}

export const GlobalCard = ({
  title,
  description,
  containerClassnames,
}: CardProps) => {
  return (
    <div
      className={`${containerClassnames} w-72 h-96 flex flex-col  justify-center items-center hover:bg-indigo-800 rounded-md gap-1 shadow-lg`}
    >
      <Image src={images.yellowsofa} alt="furbio" width={500} height={500} />
      <div className="bg-white w-full h-full p-5">
        <div className="w-full text-2xl text-black">{title}</div>
        <div className="w-full text-sm text-black">{description}</div>
      </div>
    </div>
  );
};
