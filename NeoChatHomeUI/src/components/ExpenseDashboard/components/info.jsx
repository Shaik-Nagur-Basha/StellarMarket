import React from "react";
import { IoFilterSharp, IoSearchOutline } from "react-icons/io5";
import avatar from "../assets/avatar.png";

export default function Info({
  title = "Dashboard",
  subTitle = "Monitor your financial activities",
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold text-black dark:text-gray-300 mb-2">
            {title}
          </h1>
          <span className="text-gray-600 dark:text-gray-500">{subTitle}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-[200px] flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md p-2 shadow-sm hover:shadow transition-shadow duration-300">
            <IoSearchOutline className="text-xl text-gray-600 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search now..."
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-500"
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white transition-all duration-300 hover:bg-gray-800 dark:hover:bg-violet-700 shadow-md hover:shadow-lg">
            <IoFilterSharp size={24} />
            <span className="text-base">Filter By</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4">
          <img src={avatar} alt="User" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold dark:text-white">
              John Smith
            </h2>
            <p className="text-gray-500">Premium Member</p>
          </div>
        </div>
        <div className="flex justify-between pt-4 border-t">
          <div>
            <p className="text-gray-500">Total Balance</p>
            <p className="text-2xl font-semibold dark:text-white">$38,224.00</p>
          </div>
          <div>
            <p className="text-gray-500">Monthly Spend</p>
            <p className="text-2xl font-semibold dark:text-white">$8,747.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
