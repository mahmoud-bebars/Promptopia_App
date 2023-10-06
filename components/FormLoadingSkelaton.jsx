import React from "react";

const FormLoadingSkelaton = () => (
  <div className="w-full animate-pulse">
    <div className="w-full mb-10  ">
      <div className=" h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-2"></div>
      <div className="w-full h-4 bg-gray-200 rounded-2xl dark:bg-gray-700 mb-1"></div>
      <div className=" w-80 h-4 bg-gray-200 rounded-2xl dark:bg-gray-700 mb-1"></div>
      <div className="w-72 h-4 bg-gray-200 rounded-2xl dark:bg-gray-700 mb-1"></div>
      <div className="w-64 h-4 bg-gray-200 rounded-2xl dark:bg-gray-700"></div>
    </div>
    <div className="w-full mb-4 p-4 border border-gray-200 rounded-xl shadow md:p-6">
      <div className="w-full">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-full h-56 bg-gray-200 rounded-2xl dark:bg-gray-700"></div>
      </div>

      <div className="w-full mt-4">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-full h-10 bg-gray-200 rounded-2xl dark:bg-gray-700"></div>
      </div>

      <div className="flex justify-end items-center mt-4 gap-2 mb-2">
        {" "}
        <div className="h-5 w-16 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2.5"></div>
        <div className="h-7 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2.5"></div>
      </div>
    </div>
  </div>
);

export default FormLoadingSkelaton;
