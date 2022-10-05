import { CashIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import { images } from 'components/images'


export default function Profile({data, details, logo}) {
  return (
    <>
      <div>
      <div>
        <img className="object-cover w-full h-32 lg:h-48" src={logo} alt="" />
      </div>
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            {
                data?.image &&
            <img className="object-cover object-center w-24 h-24 transition-all transform rounded-full ring-4 ring-white sm:h-32 sm:w-32 hover:scale-105" src={data?.image} alt="" />
            }
            {
                !data?.image &&
            <img className="object-cover object-center w-24 h-24 transition-all transform rounded-full ring-4 ring-white sm:h-32 sm:w-32 hover:scale-105" src={data?.gender==="Male" ? images.male : images.female} alt="" />
            }
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{data?.user?data?.full_name:data?.full_name}</h1>
            </div>
            <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <MailIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true" />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <CashIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true" />
                <span>Add Payment</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
          <h1 className="text-2xl font-bold text-gray-900 truncate">{data?.user?data?.full_name:data?.full_name}</h1>
        </div>
    {/* <div className="flex flex-wrap pt-5 -m-1" id="Guests">
      {details?.map((detail: any) => (
        <div
          className="w-full p-2 lg:w-1/2 md:w-1/2 sm:w-full searchBody"
          key={detail.email}
        >
          <div className="flex items-center h-full p-4 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-gray-200">
          <div
              className={`avatar avatar-lg text-white flex-shrink-0 rounded-full mr-4 bg-gray-700 p-3`}
            >
            </div>
            <div className="flex-col flex-grow">
              <h2 className="font-medium text-gray-900 title-font">{detail.param}</h2>
              <p className="font-medium text-gray-900 title-font">{detail.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div> */}
      </div>
    <div className="w-full px-5 pt-5 mx-auto overflow-hidden shadow sm:rounded-lg">
      <div className="border-t border-gray-200">
        <dl className="">
          {details.map(
            (detail: {
              param:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal;
              value:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal;
            }) => (
              <div className="px-4 py-5 my-2 transition-all transform border-2 shadow bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:scale-105">
                <dt className="text-sm font-medium text-gray-500">
                  {detail.param}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail.value}
                </dd>
              </div>
            )
          )}
        </dl>
      </div>
    </div>
    </div>
    </>
  )
}
