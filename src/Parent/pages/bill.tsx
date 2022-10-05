import { PaperClipIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Tab from 'Parent/components/Bill/Tab'
import Layout from 'Parent/components/Layout'
import React from 'react'

export default function Bill() {
    const data = [
        {name: 'School Fee', price: 30000},
        {name: 'Uniform', price: 30000},
        {name: 'Sport Wear', price: 30000},
        {name: 'Mathematics TextBook', price: 30000},
        {name: 'English TextBook', price: 30000},
        // {name: 'English TextBook', price: 30000},
    ]
    console.log(1%2)
  return (
    <Layout>
        <Tab />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Basic 3 2nd Term Bill</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
            {
                data?.map((dt, i)=>{
                    let bg
                    if(data?.length%2!==0){
                        if(i===0){
                            bg = "bg-gray-50"
                        }
                        else if(i>0 && i%2!==0){
                            bg = "bg-white"
                        }
                        else{
                            bg="bg-gray-50"
                        }
                    }
                    else {
                        if(i===0){
                            bg="bg-gray-50"
                        }
                        else if(i>0 && i%2!==0){
                            bg="bg-white"
                        }
                        else{
                            bg="bg-gray-50"
                        }
                    }
                    return(
          <div className={`${bg} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`} key={i}>
            <dt className="text-sm font-medium text-gray-500 sm:col-span-2">{dt.name}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">#{dt.price}</dd>
          </div>
                )})
            }
          <div className={`${data?.length % 2 === 0 ? "bg-gray-50" : "bg-white"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">24 X #100</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">#2400</dd>
          </div>
          <div className={`${data?.length%2!==0?"bg-gray-50":"bg-white"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <div className="sm:col-span-2">Total:</div>
            <div className="">#20000</div>
          </div>
        </dl>
      </div>
    </div>
    <div className="my-2 mt-4 flex justify-end">
            <div className="px-6 py-2 font-extrabold text-white bg-indigo-700 rounded-lg shadow flex items-center hover:bg-white border-2 border-indigo-700 hover:text-indigo-700 cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-lg transform">
                <ShoppingCartIcon className='w-5 h-5 mr-2' />
                Make Payment</div>
    </div>
    </Layout>
  )
}
