import React from "react";
import { FaBtc, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import Title from "./title";

export default function Accounts() {
  const data = [
    {
      name: "Crypto",
      account: "codewave@gmail.com",
      amount: "85,345.00",
      icon: (
        <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full">
          <FaBtc size={26} />
        </div>
      ),
    },
    {
      name: "Visa Debit Card",
      account: "2463********8473",
      amount: "15,345.00",
      icon: (
        <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
          <RiVisaLine size={26} />
        </div>
      ),
    },
    {
      name: "MasterCard",
      account: "6785********8473",
      amount: "55,345.00",
      icon: (
        <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-full">
          <FaCcMastercard size={26} />
        </div>
      ),
    },
    {
      name: "Paypal",
      account: "codewave@gmail.com",
      amount: "35,345.00",
      icon: (
        <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full">
          <FaPaypal size={26} />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-0 py-5 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
      <Title title="Accounts" />
      <span className="text-sm text-gray-600 dark:text-gray-500 block mb-6">
        View all your accounts
      </span>

      <div className="w-full space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer shadow hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <div>
                <p className="text-black dark:text-gray-400 text-lg">
                  {item.name}
                </p>
                <span className="text-gray-600">{item.account}</span>
              </div>
            </div>

            <div>
              <p className="text-xl text-black dark:text-gray-400 font-medium">
                ${item.amount}
              </p>
              <span className="text-sm text-gray-600 dark:text-violet-700">
                Account Balance
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
