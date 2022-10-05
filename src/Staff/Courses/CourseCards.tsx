import React from "react";
import {Link} from "react-router-dom"
export default function CourseCards({ courses, school }) {
  return (
    <div className="flex flex-wrap pt-5 -m-2" id="Guests">
      {courses?.map((course: any) => (
        <>
          {
            <div
              className="w-full p-2 lg:w-1/3 md:w-1/2 sm:w-full searchBody"
              key={course.id}
            >
              <Link to={`/${school}/staff/course/${course?.school_class.name}/${course?.subject.name}/${course.id}`}
              className="flex items-center h-full p-4 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-gray-200"
              >
              <>
                <div
                  className={`avatar avatar-lg text-white flex-shrink-0 rounded-full mr-4 bg-gray-900 p-3`}
                ></div>
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                  {course?.school_class.name} {course?.subject.name}
                  </h2>
                </div>
              </>
              </Link>
            </div>
          }
        </>
      ))}
    </div>
  );
}
