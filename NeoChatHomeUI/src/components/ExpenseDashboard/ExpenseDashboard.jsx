import React from "react";
import Navbar from "./components/navbar";
import Stats from "./components/stats";
import Info from "./components/info";
import Chart from "./components/chart";
import DoughnutChart from "./components/doughnutchart";
import Accounts from "./components/accounts";
import Transactions from "./components/transactions";

export default function ExpenseDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-20">
        <Navbar />

        <div className="px-0 sm:px-5 2xl:px-20 space-y-8">
          <Info
            title="Dashboard"
            subTitle="Monitor your financial activities"
          />

          <Stats />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="w-full h-full">
              <Chart />
            </div>
            <div className="w-full h-full">
              <DoughnutChart />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 md:gap-10 mb-8">
            <Transactions />
            <Accounts />
          </div>
        </div>
      </div>
    </div>
  );
}
