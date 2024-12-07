"use client";
import { useState, useEffect } from "react";

// Define the type for the CRM data
interface AnalyticsData {
  totalLeads: number;
  totalConversions: number;
  activeUsers: number;
  monthlyPerformance: number[];
}

const MonthlyReportPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Simulate fetching monthly report data
    setData({
      totalLeads: 3500,
      totalConversions: 1050,
      activeUsers: 900,
      monthlyPerformance: [300, 400, 350, 500, 450, 600, 650, 700], // Example monthly performance data
    });
  }, []);

  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Total Leads</h2>
            <p className="text-3xl">{data ? data.totalLeads : "Loading..."}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Total Conversions</h2>
            <p className="text-3xl">
              {data ? data.totalConversions : "Loading..."}
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Active Users</h2>
            <p className="text-3xl">{data ? data.activeUsers : "Loading..."}</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
          <ul>
            {data?.monthlyPerformance.map((value, index) => (
              <li key={index} className="text-lg">
                Month {index + 1}: {value} leads
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MonthlyReportPage;
