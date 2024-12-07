"use client";
import { useState, useEffect } from "react";

// Define the type for the CRM data
interface AnalyticsData {
  totalLeads: number;
  totalConversions: number;
  activeUsers: number;
  dailyPerformance: number[];
}

const DailyReportPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Simulate fetching daily report data
    setData({
      totalLeads: 150,
      totalConversions: 45,
      activeUsers: 120,
      dailyPerformance: [100, 150, 120, 180, 160], // Example daily performance data
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
          <h2 className="text-xl font-semibold mb-4">Daily Performance</h2>
          <ul>
            {data?.dailyPerformance.map((value, index) => (
              <li key={index} className="text-lg">
                Day {index + 1}: {value} leads
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DailyReportPage;
