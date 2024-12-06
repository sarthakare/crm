"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for the CRM data
interface AnalyticsData {
  leads: number;
  conversions: number;
  activeUsers: number;
  conversionRate: number;
  monthlyPerformance: number[];
}

const AnalyticsPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    // Mock data for CRM analytics
    setData({
      leads: 1500,
      conversions: 450,
      activeUsers: 1200,
      conversionRate: 30, // Percentage
      monthlyPerformance: [
        100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
      ],
    });
  }, []);

  // Chart data configuration
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Leads Over Time",
        data: data ? data.monthlyPerformance : [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <main className="h-full w-full flex justify-center items-center m-10">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Analytics Stats */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Total Leads</h2>
            <p className="text-3xl">{data ? data.leads : "Loading..."}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Total Conversions</h2>
            <p className="text-3xl">{data ? data.conversions : "Loading..."}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Active Users</h2>
            <p className="text-3xl">{data ? data.activeUsers : "Loading..."}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Conversion Rate</h2>
            <p className="text-3xl">
              {data ? `${data.conversionRate}%` : "Loading..."}
            </p>
          </div>
        </div>

        {/* Line Chart: Leads over time */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h1 className="text-3xl font-semibold">CRM Analytics Dashboard</h1>
          <h2 className="text-xl font-semibold mb-4">
            Leads Over Time (Monthly)
          </h2>
          <Line data={chartData} />
        </div>
      </div>
    </main>
  );
};

export default AnalyticsPage;
