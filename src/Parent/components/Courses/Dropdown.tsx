/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Test() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="ml-2 inline-flex justify-center w-full rounded-md border-2 transition-all duration-500 border-indigo-700 font-extrabold shadow-sm px-4 py-2 hover:bg-white text-sm hover:text-indigo-700 bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-100 focus:ring-indigo-500">
              View Results
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              <div className="py-1">
                {
                    ["Basic 1 1st Term", "Basic 1 2nd Term", "Basic 1 3rd Term", "Basic 2 1st Term", "Basic 2 2nd Term", "Basic 2 3rd Term","Basic 3 1st Term", "Basic 3 2nd Term", "Basic 3 3rd Term"].map((term, i)=>(
                <Menu.Item key={i}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-indigo-100 text-indigo-900' : 'text-indigo-700',
                        'block px-4 py-2 text-sm hover:bg-indigo-700 hover:text-white'
                      )}
                    >
                      {term}
                    </a>
                  )}
                </Menu.Item>
                    ))
                }
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
