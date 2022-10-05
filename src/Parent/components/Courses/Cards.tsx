import React from "react";
import { Link } from "react-router-dom"
export default function Cards({courses}) {
  return (
    <>
      <div className="pt-5" />
      
      <div className="flex flex-wrap pt-5 -m-2" id="Guests">
        {["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]?.map((course: any, i: any) => (
          <div
            className="w-full p-2 lg:w-1/3 md:w-1/2 sm:w-full searchBody"
            key={i}
          >
            <div className="flex items-center h-full p-4 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-indigo-200 transition-all duration-500">
              <>
                <div
                  className={`avatar avatar-lg text-white flex-shrink-0 rounded-full mr-4 bg-indigo-700 p-3`}
                ></div>
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    MAT251
                  </h2>
                    <div className="flex justify-between w-full">
                      <p className="py-1 text-sm font-medium text-gray-500 truncate font-dosis">
                        Subject Teacher
                      </p>
                      <p className="py-1 text-sm font-medium text-gray-500 truncate font-dosis">
                        Mrs. Adeliyi Feyisayo
                      </p>
                    </div>
                </div>
              </>
          </div>
            </div>
        ))}
      </div>
    </>
  );
}
