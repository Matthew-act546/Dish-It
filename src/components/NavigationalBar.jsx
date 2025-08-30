import React, { useState } from "react";

export default function NavigationalBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#fd", current: false },
    { name: "Favorites", href: "#", current: false },
    { name: "Country Dish", href: "#", current: false },
    { name: "Browse Dish", href: "#", current: false },
  ];

  return (
    <nav className="bg-[#8C5050]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./logo.png" className="h-12" alt="Dish Logo" />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
            Dish it.
          </span>
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#A65C5C] focus:outline-none focus:ring-2 focus:ring-amber-900"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block md:w-auto">
          <ul className="font-medium flex flex-row space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                  item.current
                    ? "text-white font-semibold"
                    : "text-white hover:underline"
                }`}
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#8C5050] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-white text-xl font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-bold"
          >
            ×
          </button>
          
        </div>
        <hr className="text-white"/>
        <ul className="flex flex-col p-4 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`block py-2 px-3 rounded-sm ${
                item.current
                  ? "text-white font-semibold"
                  : "text-white hover:underline"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}