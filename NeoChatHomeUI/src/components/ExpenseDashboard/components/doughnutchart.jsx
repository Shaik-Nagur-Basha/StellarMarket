import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Title from "./title";

export default function DoughnutChart() {
  const data = [
    { name: "Income", value: 150020 },
    { name: "Expense", value: 50010 },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];

  return (
    <div className="w-full flex flex-col items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <Title title="Summary" />

      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            innerRadius={110}
            outerRadius={180}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
