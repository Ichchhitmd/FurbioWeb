import React from 'react'

interface CustomButtonProps {
    children: React.ReactNode,
    title: string;
    handlePress?: () => void;
    containerClassnames?: string;
}
export const DashboardButton = ({title, handlePress, containerClassnames}: CustomButtonProps)  => {
  return (
    <button onClick={handlePress} className={`${containerClassnames} w-32 h-6 flex justify-center items-center bg-transparent hover:bg-indigo-800 hover:text-white`}>{title}</button>
  )
}
