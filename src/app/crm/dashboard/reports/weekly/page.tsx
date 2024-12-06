"use client";
import { useState, useEffect } from "react";

// Define the type for the CRM data
interface AnalyticsData {
  totalLeads: number;
  totalConversions: number;
  activeUsers: number;
  weeklyPerformance: number[];
}

const WeeklyReportPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Simulate fetching weekly report data
    setData({
      totalLeads: 800,
      totalConversions: 240,
      activeUsers: 700,
      weeklyPerformance: [60, 75, 90, 100, 110, 95, 85], // Example weekly performance data
    });
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Total Leads</h2>
              <p className="text-3xl">
                {data ? data.totalLeads : "Loading..."}
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Total Conversions</h2>
              <p className="text-3xl">
                {data ? data.totalConversions : "Loading..."}
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Active Users</h2>
              <p className="text-3xl">
                {data ? data.activeUsers : "Loading..."}
              </p>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Weekly Performance</h2>
            <ul>
              {data?.weeklyPerformance.map((value, index) => (
                <li key={index} className="text-lg">
                  Week {index + 1}: {value} leads
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeeklyReportPage;
