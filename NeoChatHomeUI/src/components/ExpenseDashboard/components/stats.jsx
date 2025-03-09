import React from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

export default function Stats() {
  const data = [
    {
      label: "Your Total Balance",
      amount: "100,020.00",
      increase: 10.9,
      icon: <BsCurrencyDollar size={26} />,
    },
    {
      label: "Total Income",
      amount: "150,010.00",
      icon: <BsCashCoin size={26} />,
      increase: 8.9,
    },
    {
      label: "Total Expense",
      amount: "50,010.00",
      icon: <SiCashapp size={26} />,
      increase: -10.9,
    },
  ];

  const ICON_STYLES = [
    "bg-blue-300 text-blue-800",
    "bg-emerald-300 text-emerald-800",
    "bg-rose-300 text-rose-800",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 md:mb-20">
      {data.map((item, index) => (
        <div
          key={index + item.label}
          className="w-full p-6 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl shadow-md"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}
            >
              {item.icon}
            </div>

            <div className="space-y-3">
              <span className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                {item.label}
              </span>
              <p className="text-2xl 2xl:text-3xl font-medium text-black dark:text-gray-400">
                ${item.amount}
              </p>
            </div>
          </div>

          <div>
            <p
              className={`flex gap-1 items-center text-base md:text-lg font-semibold ${
                item.increase > 0 ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {item.increase > 0 ? <IoMdArrowUp /> : <IoMdArrowDown />}
              {Math.abs(item.increase)} %
            </p>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-500">
              Compare to last year
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
