import React, { useState } from "react";
import { RiCurrencyLine } from "react-icons/ri";
import ThemeSwitch from "./themeswitch";
import avatar from "../assets/avatar.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const links = ["Dashboard", "Transactions", "Accounts", "Settings"];

export default function Navbar() {
  const [selected, setSelected] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="relative w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
          <RiCurrencyLine className="text-white text-3xl hover:animate-spin" />
        </div>
        <span className="text-xl font-bold text-black dark:text-white">
          My-Finance
        </span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className={`${
              index === selected
                ? "bg-black dark:bg-violet-800 text-white"
                : "text-gray-700 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800"
            } px-6 py-2 rounded-full cursor-pointer transition-all duration-300`}
            onClick={() => setSelected(index)}
          >
            {link}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 md:gap-10">
        <ThemeSwitch />

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-gray-600 dark:text-gray-400"
        >
          <HiMenuAlt3 size={24} />
        </button>

        <div className="hidden md:flex items-center gap-2">
          <img
            src={avatar}
            alt="User"
            className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover cursor-pointer"
          />
          <div className="hidden md:block">
            <p className="text-lg font-medium text-black dark:text-gray-400">
              John Doe
            </p>
            <span className="text-sm text-gray-700 dark:text-gray-500">
              johndoe@gmail.com
            </span>
          </div>
          <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full right-0 w-48 mt-2 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg md:hidden">
          {links.map((link, index) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                index === selected
                  ? "bg-gray-100 dark:bg-slate-700 text-black dark:text-white"
                  : "text-gray-700 dark:text-gray-400"
              }`}
              onClick={() => {
                setSelected(index);
                setMobileMenu(false);
              }}
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
