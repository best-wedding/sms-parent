import React, { Fragment } from "react";
// import { Courses } from "Mock/Courses";
import { Dialog, Menu, Transition } from "@headlessui/react";
import CourseProfile from "./CourseProfile";
import {Courses} from "Mock/Courses";
// import CourseProfile from "./CourseProfile";
export default function Table({
  handleNameOrder,
  list,
  handleNext,
  handlePrevious,
  listCount,
  order,
  courses
}) {
  
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={handleNameOrder}
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Number Of Assigned Classes
                  </th>
                  
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Options</span>
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200"
                id="Courses"
              >
                {list?.map((course) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <div className="flex items-center"> */}
                        {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full object-center object-cover"
                            src={
                              person.gender === "Male"
                                ? "https://res.cloudinary.com/jewbreel1/image/upload/v1625737172/jewbreel/sms/male_avatar_c3v0vu.png"
                                : "https://res.cloudinary.com/jewbreel1/image/upload/v1625737170/jewbreel/sms/female_avatar_pgqx9s.png"
                            }
                            alt=""
                          />
                        </div> */}
                        {/* <div className="ml-4"> */}
                          <div className="text-sm font-medium text-gray-900 text-center">
                            {course}
                          </div>
                          {/* <div className="text-sm text-gray-500">
                            {person.email}
                          </div> */}
                        {/* </div> */}
                      {/* </div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-center">
                        {course.assigned_classes ? course.assigned_classes.length : 0}
                      </div>
                      {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                    </td>
                    <Menu as="td" className="relative inline text-left">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                              <i className="far fa-grip-horizontal text-grey-400 hover:text-grey-900" />
                            </Menu.Button>
                          </div>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <div className="py-1">
                                {/* <Menu.Item>
                                  <CourseProfile CourseName={course.name} />
                                </Menu.Item> */}
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                  >
                                    Edit
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
              className="bg-white w-full px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{listCount + 1}</span>{" "}
                  to <span className="font-medium">{listCount + 10}</span> of{" "}
                  <span className="font-medium">{Courses.length}</span>{" "}
                  results
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  onClick={handlePrevious}
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  onClick={handleNext}
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
