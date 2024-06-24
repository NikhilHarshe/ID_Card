// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from '../assets/user.png'
function Cards() {
  return (
    <div className="flex flex-row  h-[80vh] justify-center items-center card">
      <div className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl h-[300px]">
        <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse flex justify-center">
          <img src={image1} className="w-[123px] h-[129px] justify-center flex text-center items-center mt-[16px]" />
        </div>
        <div className="p-3 h-">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
            <div className="..."></div>
            <div className="col-span-2 ..."></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row flex justify-center">
        <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse justify-center flex">
        <img src={image1} className="w-[123px] h-[129px] justify-center flex text-center items-center mt-[50px]" />
        </div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          </div>
          <div className="flex gap-3 mt-auto">
            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
