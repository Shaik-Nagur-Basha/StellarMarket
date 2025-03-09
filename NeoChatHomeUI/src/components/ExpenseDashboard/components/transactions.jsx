import React from "react";
import Title from "./title";
import { RiProgress3Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

export default function Transactions() {
  const data = [
    {
      date: "2024-01-05",
      name: "Online Store",
      contact: "+1234567890",
      status: "Completed",
      source: "Credit Card",
      amount: 150,
    },
    {
      date: "2024-01-12",
      name: "Grocery Store",
      contact: "+1987654321",
      status: "Rejected",
      source: "Debit Card",
      amount: 75,
    },
    {
      date: "2024-01-20",
      name: "Utility Bill",
      contact: "+1122334455",
      status: "Pending",
      source: "Bank Transfer",
      amount: 100,
    },
    {
      date: "2024-02-03",
      name: "Restaurant",
      contact: "+1555666777",
      status: "Completed",
      source: "Cash",
      amount: 50,
    },
    {
      date: "2024-02-10",
      name: "Online Subscription",
      contact: "+1444333222",
      status: "Completed",
      source: "Credit Card",
      amount: 25,
    },
  ];

  return (
    <div className="py-5 w-full">
      <Title title="Latest Transactions" />
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <thead className="w-full border-b border-gray-300 dark:border-gray-700">
            <tr className="w-full text-black dark:text-gray-400 text-left">
              <th className="py-2">Date</th>
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Source</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.slice(0, 5).map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                <td className="py-2 px-2">{item.date}</td>
                <td className="py-2 px-2">
                  <div className="transform transition-all duration-200 hover:translate-x-2">
                    <p className="font-medium text-lg text-black dark:text-gray-400">
                      {item.name}
                    </p>
                    <span className="text-sm text-gray-600">
                      {item.contact}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-2 flex items-center gap-2">
                  {item.status === "Pending" && (
                    <RiProgress3Line className="text-amber-600" size={24} />
                  )}
                  {item.status === "Completed" && (
                    <IoCheckmarkDoneCircle
                      className="text-emerald-600"
                      size={24}
                    />
                  )}
                  {item.status === "Rejected" && (
                    <TiWarning className="text-red-600" size={24} />
                  )}
                  <span>{item.status}</span>
                </td>
                <td className="py-2 px-2">{item.source}</td>
                <td className="py-2 px-2 text-black dark:text-gray-400 text-base font-medium">
                  ${item.amount}.00
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
