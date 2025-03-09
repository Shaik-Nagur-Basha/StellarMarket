import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Title from "./title";

export default function Chart() {
  const data = [
    { label: "January", income: 5000, expense: 3000 },
    { label: "February", income: 5200, expense: 3200 },
    { label: "March", income: 5500, expense: 3500 },
    { label: "April", income: 4800, expense: 2900 },
    { label: "May", income: 5100, expense: 3100 },
    { label: "June", income: 5300, expense: 3300 },
    { label: "July", income: 5400, expense: 3400 },
    { label: "August", income: 5600, expense: 3600 },
    { label: "September", income: 5700, expense: 3700 },
    { label: "October", income: 5900, expense: 3900 },
    { label: "November", income: 6000, expense: 4000 },
    { label: "December", income: 6200, expense: 4200 },
  ];

  return (
    <div className="w-full">
      <Title title="Transaction Activity" />
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mt-5 transition-all duration-300 shadow-lg hover:shadow-xl">
        <ResponsiveContainer
          width="100%"
          height={window.innerWidth > 768 ? 500 : 300}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <YAxis stroke="#888" />
            <XAxis dataKey="label" stroke="#888" />
            <Legend />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#82ca9d"
              strokeWidth={3}
              dot={{ strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
