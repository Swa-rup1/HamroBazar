import React from "react";
import { AnimatedText } from "../utils/AnimatedText";

const Categories = ({ onSelectCategory, title }) => {
  return (
    <div className="m-5 ">
      <AnimatedText text="Categories" />
      <div className="flex gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSelectCategory("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSelectCategory("jewelery")}
        >
          jewelery
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSelectCategory("electronics")}
        >
          Electronics
        </button>
      </div>
    </div>
  );
};

export default Categories;
