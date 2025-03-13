import React from "react";
import { BsBasket3, BsGraphUp } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";

export default function Dashboard({
  title = "Dashboard",
  subTitle = "Monitor your market activities",
}) {
  const stats = [
    {
      label: "Total Sales",
      amount: "120,020.00",
      increase: 12.5,
      icon: <MdAttachMoney size={26} />,
      color: "blue",
    },
    {
      label: "Total Orders",
      amount: "1,240",
      increase: 8.2,
      icon: <BsBasket3 size={26} />,
      color: "green",
    },
    {
      label: "Total Customers",
      amount: "3,543",
      increase: 5.7,
      icon: <HiUsers size={26} />,
      color: "purple",
    },
    {
      label: "Revenue Growth",
      amount: "23.5%",
      increase: 15.3,
      icon: <BsGraphUp size={26} />,
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-300 text-blue-800",
      green: "bg-emerald-300 text-emerald-800",
      purple: "bg-violet-300 text-violet-800",
      orange: "bg-orange-300 text-orange-800",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold text-black dark:text-gray-300 mb-2">
            {title}
          </h1>
          <span className="text-gray-600 dark:text-gray-500">{subTitle}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 md:mb-20">
        {stats.map((item, index) => (
          <div
            key={index + item.label}
            className="w-full p-6 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl shadow-md"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${getColorClasses(
                  item.color
                )}`}
              >
                {item.icon}
              </div>

              <div className="space-y-3">
                <span className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                  {item.label}
                </span>
                <p className="text-2xl 2xl:text-3xl font-medium text-black dark:text-gray-400">
                  {item.amount}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="flex gap-1 items-center text-base md:text-lg font-semibold text-emerald-500">
                ↑ {item.increase}%
              </p>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-500">
                vs. last month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
