import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Input } from '@headlessui/react'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavigationalBar() {
  return (
    <Disclosure as="nav" className="bg-amber-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center ">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <h1 className='text-2xl text-white font-medium'>Dish it.</h1>
        </div>

        <div className="flex flex-1 items-center justify-between sm:items-stretch">
          <div className="hidden sm:ml-6 sm:block  w-full">
            <div className="flex  w-full justify-end ">
              <a href="" className='text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Home</a>
              <a href="" className='text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Favorites</a>
              <a href="" className='text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Country Dish</a>
              <a href="" className='text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Browse Dish</a>
            </div>
          </div>
        </div>
        

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

       <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
     

     
  );
}
