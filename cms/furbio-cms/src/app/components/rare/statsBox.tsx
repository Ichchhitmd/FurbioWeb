import React from 'react';

interface StatsBoxProps {
  title: string;
  value: number;
}

const StatsBox: React.FC<StatsBoxProps> = ({ title, value }) => {
  return (
    <div className='w-48 h-48 bg-indigo-800 flex flex-col items-center'>
      <div className='my-9 justify-center flex flex-col gap-5'>
        <div className='text-2xl text-white'>
          {title}
        </div>
        <div className='text-4xl text-white'>
          {value}
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
