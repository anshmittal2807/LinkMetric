import React from "react";
import { Line } from "react-chartjs-2";

const AnalyticChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    interaction: { intersect: false, mode: "index" },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        grid: { color: "rgba(70,72,212,0.08)" },
        ticks: { color: "#6b7280" },
      },
    },
    layout: { padding: { top: 8, right: 8, left: 8, bottom: 6 } },
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Clicks",
        data: [12, 19, 3, 5, 9, 10],
        tension: 0.35,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        borderColor: "#4648D4",
        backgroundColor: "rgba(70,72,212,0.12)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex justify-center w-full">

    <div className="w-full px-4 sm:px-4">
      <div className="bg-[#FCF8FF] rounded-lg mt-6 border flex flex-col border-[#464554]/10  md:p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#EEF2FF] rounded-md text-[#4648D4]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 3a1 1 0 000 2h1v11a1 1 0 001 1h8a1 1 0 001-1V5h1a1 1 0 100-2H3z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-xl font-semibold text-gray-800">Clicks Trend</h2>
            <p className="text-sm text-gray-500 hidden md:block">— Last 6 months</p>
          </div>
         
        </div>

        <div className="w-full h-72 md:h-80 lg:h-96">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnalyticChart;
