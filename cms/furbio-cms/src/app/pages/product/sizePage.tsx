import React from "react";

export const SizePage = () => {
  return (
    <div className="w-full mx-28 my-28 flex flex-col gap-4">
      Add Size
      <div>
        <input
          type="text"
          placeholder="Size Name"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg w-"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const OriginPage = () => {
  return (
    <div className="w-full mx-28 my-28 flex flex-col gap-4">
      Add Origin
      <div>
        <input
          type="text"
          placeholder="Country Name"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg w-"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const TagPage = () => {
  return (
    <div className="w-full mx-28 my-28 flex flex-col gap-4">
      Add Tag
      <div>
        <input
          type="text"
          placeholder="Tag Name"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg w-"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const ColorPage = () => {
  return (
    <div className="w-full mx-28 my-28 flex flex-col gap-4">
      Add Color
      <div>
        <input
          type="text"
          placeholder="Color Name"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg w-"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
