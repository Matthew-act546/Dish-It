import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Favorites', href: '#', current: false },
  { name: 'Country Dish', href: '#', current: false },
  { name: 'Browse Dish', href: '#', current: false },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


export default function NavigationalBar() {
  return (
    <Disclosure as="nav" className="bg-amber-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-white font-semibold">Dish it.</h1>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <input
              type="text"
              name="full_name"
              className="w-50 h-9 max-w-sm px-3 rounded-full py-2 text-sm border-1 me-4 bg-white border-white text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Search dishes..."
            />
          </div>

          {/* Right: Navigation links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className="text-white text-sm font-medium hover:underline"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile nav links */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className="text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}