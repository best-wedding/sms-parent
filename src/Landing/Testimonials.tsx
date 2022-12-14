import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Carousel from 'react-material-ui-carousel';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/react/outline'
import UserImg from "../images/u1.png"
export default function Testimonials() {
  const testimonials = [
    {
      name: "Jubril Musa",
      school: "Co-Owner @ Best College",
      text: "This App has been the best thing that happened to my school i'd surely recommend it to any school owner out there",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jubril Musa",
      school: "Co-Owner @ Best College",
      text: "This App has been the best thing that happened to my school i'd surely recommend it to any school owner out there",
      image: UserImg
    },
    {
      name: "Jubril Musa",
      school: "Co-Owner @ Best College",
      text: "This App has been the best thing that happened to my school i'd surely recommend it to any school owner out there",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jubril Musa",
      school: "Co-Owner @ Best College",
      text: "This App has been the best thing that happened to my school i'd surely recommend it to any school owner out there",
      image: UserImg
    },
    {
      name: "Jubril Musa",
      school: "Co-Owner @ Best College",
      text: "This App has been the best thing that happened to my school i'd surely recommend it to any school owner out there",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ]
  return (
    <>
      <section className="bg-gray-900 my-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-1 md:px-6 lg:px-8">
      <Carousel
                    animation="slide"
                    interval={7000}
                    swipe={true}
                    indicatorContainerProps={{
                      className: "sr-only",
                      style: {
                        display: "none", // 5
                      },
                    }}
                  >
                  {
                    testimonials.map(test=>(
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-900 lg:pr-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow p-5">
              <svg
                className="absolute top-0 left-0 transform -translate-y-2 h-8 w-8 text-gray-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                {test.text}.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={test.image}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">{test.name}</div>
                  <div className="text-base font-medium text-gray-200">{test.school}</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
                    ))
                  }
                  </Carousel>
      </div>
    </section>
    </>
  )
}
