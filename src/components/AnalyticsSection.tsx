import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "remixicon/fonts/remixicon.css";
import { Bar, Pie, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const totalCustomers = 156;
  const positive = 80;
  const neutral = 15;
  const negative = 5;
  
  const conversationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Conversations",
        data: [5000, 10456, 7500, 20000, 10000, 35000, 1500],
        backgroundColor: "#B0BCEF",
        hoverBackgroundColor: "#0028CA",
        borderRadius: 4,
      },
    ],
  };
  
  const conversationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: { borderWidth: 1 },
      point: { radius: 2 },
    },
    scales: {
      x: { grid: { display: false } },
      y: { 
        beginAtZero: false, 
        ticks: { 
          stepSize: 2000,
          display: !isMobile // Only show y-axis ticks on larger screens
        } 
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { bodyFont: { size: 12 } },
    },
    barThickness: 10,
    maxBarThickness: 20,
  };
  
  const ticketReplyData = {
    labels: ["0-7 secs",  "8-24 secs", "+24 secs", "No replies"],
    datasets: [
      {
        data: [25, 25, 40, 10],
        backgroundColor: [
          "#1DD57F",
          "#6A29D3",
          "#2868F3",
          "#E68C33",
        ],
        borderWidth: 0,
      },
    ],
  };
  
  const ticketReplyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { bodyFont: { size: 12 } },
    },
  };
  
  const liveChatData = {
    labels: [
      "12 AM",
      "3 AM",
      "6 AM",
      "9 AM",
      "12 PM",
      "3 PM",
      "6 PM",
      "9 PM",
    ],
    datasets: [
      {
        label: "This week",
        data: [0, 100, 400, 200, 250, 350, 150, 200],
        borderColor: "#43DDFF",
        backgroundColor: "rgba(67, 221, 255, 0.2)",
        fill: true,
        tension: 0,
      },
      {
        label: "Last week",
        data: [0, 600, 700, 750, 500, 100, 200, 180],
        borderColor: "#CB3BFF",
        backgroundColor: "rgba(203, 59, 255, 0.2)",
        fill: true,
        tension: 0,
      },
    ],
  };
  
  // Fix: Define a valid position type that Chart.js expects
  const topPosition = "top" as const;
  const bottomPosition = "bottom" as const;
  
  const liveChatOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? topPosition : bottomPosition,
        labels: { font: { size: 12 } },
      },
      tooltip: { bodyFont: { size: 12 } },
    },
    scales: {
      y: { 
        beginAtZero: true,
        ticks: {
          display: !isMobile // Only show y-axis ticks on larger screens
        }
      },
    },
  };
  
  const agentData = [
    { name: "Mary Freund", id: "#PK234D", time: "333.09" },
    { name: "Kimberly Mastrangelo", id: "#PK234D", time: "122.11" },
    { name: "Rhonda James", id: "#PK234D", time: "80.23" },
    { name: "Stephanie Sharkey", id: "#PK234D", time: "34.3" },
  ];

  return (
    // Modified to take full width by removing width constraints and adjusting padding
    <div className="pt-6 w-full px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-9 mb-4">
        <h2 className="font-semibold text-[16px] text-[#20232C] mb-2 sm:mb-0">
          Analytics
        </h2>
        <div className="relative w-full sm:w-[240px]">
          <input
            type="text"
            placeholder="Search widget"
            className="bg-white px-2 py-2 text-[#9199B0] font-medium rounded-lg text-sm border border-[#DEE1E7] h-9 w-full pr-10 focus:border-[2px] focus:border-[#0028CA] focus:outline-none"
          />
          <i className="ri-search-line absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C1C5D2] flex items-center justify-center"></i>
        </div>
      </div>

      {/* Main Layout - Modified to use full width */}
      <div className="mt-2 flex flex-col gap-4 w-full">
        {/* First Row of Cards - Modified for full width responsiveness */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Card 1 - Customer Satisfaction */}
          <div className="w-full lg:flex-1 p-4 border border-[#F3F4F6] rounded-lg bg-white flex flex-col">
            <p className="font-semibold text-sm text-[#20232C] border-b border-[#F3F4F6] -mx-4 px-4 pb-3">
              Customer satisfaction
            </p>
            <div className="grid grid-cols-2 gap-7 max-h-[200px]">
              <div className="flex flex-col items-start space-y-2 mt-4">
                <i className="ri-user-voice-line w-4 h-4 text-[#0028CA]"></i>
                <div>
                  <p className="text-[#9199B0] text-xs font-medium">
                    Total responses
                  </p>
                  <p className="text-[#20232C] font-semibold text-base">
                    {totalCustomers} customers
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2 mt-4">
                <i className="ri-thumb-up-line w-4 h-4 text-[#3AC828]"></i>
                <div>
                  <p className="text-[#9199B0] text-xs font-medium">Positive</p>
                  <p className="text-[#20232C] font-semibold text-base">
                    {positive}%
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <i className="ri-checkbox-blank-circle-line w-4 h-4 text-[#9199B0]"></i>
                <div>
                  <p className="text-[#9199B0] text-xs font-medium">Neutral</p>
                  <p className="text-[#20232C] font-semibold text-base">
                    {neutral}%
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <i className="ri-thumb-down-line w-4 h-4 text-[#FD5839]"></i>
                <div>
                  <p className="text-[#9199B0] text-xs font-medium">Negative</p>
                  <p className="text-[#20232C] font-semibold text-base">
                    {negative}%
                  </p>
                </div>
              </div>
            </div>
            <div className="h-10 mt-auto">
              <p className="text-xs text-[#9199B0] font-medium flex items-center border-t border-[#F3F4F6] -mx-4 px-4 py-4 gap-1 h-full">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
              </p>
            </div>
          </div>
          
          {/* Card 2 - Conversation Trend */}
          <div className="w-full lg:flex-1 p-4 border border-[#F3F4F6] rounded-lg flex flex-col bg-white">
            <p className="font-semibold text-sm text-[#20232C] border-b border-[#F3F4F6] -mx-4 px-4 pb-3">
              Conversation trend
            </p>
            <div className="mt-3 flex-1 h-[200px]">
              <Bar data={conversationData} options={conversationOptions} />
            </div>
            <div className="h-10 mt-auto">
              <p className="text-xs text-[#9199B0] font-medium flex items-center border-t border-[#F3F4F6] -mx-4 px-4 py-4 gap-1">
                <span className="inline-block w-2 h-2 bg-[#B0BCEF] mr-2"></span>
                This information is based on last week
              </p>
            </div>
          </div>
          
          {/* Card 3 - Ticket by First Reply Time */}
          <div className="w-full lg:flex-1 border border-[#F3F4F6] rounded-lg flex flex-col bg-white">
            <p className="font-semibold text-sm text-[#20232C] px-4 py-3">
              Ticket by First Reply Time
            </p>
            <div className="flex flex-row items-center border-t border-[#F3F4F6] gap-1">
              <div className="w-1/2 h-[176px] flex items-center justify-center">
                <div className="w-[136px] h-[136px] ml-0 sm:ml-5">
                  <Pie data={ticketReplyData} options={ticketReplyOptions} />
                </div>
              </div>
              <div className="flex flex-row w-1/2 h-[176px]">
                <div className="pt-8 ml-0 sm:ml-6">
                  <ul className="text-[#9199B0] font-medium text-xs">
                    <li className="flex items-center mb-2">
                      <span className="w-2 h-2 bg-[#1DD57F] mr-2"></span>
                      0-7 secs
                      <span className="ml-2 sm:ml-[49px] text-[#20232C] font-semibold text-xs">
                        25%
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <span className="inline-block w-2 h-2 bg-[#6A29D3] mr-2"></span>
                      8-24 secs
                      <span className="ml-2 sm:ml-[42px] text-[#20232C] font-semibold text-xs">
                        25%
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <span className="inline-block w-2 h-2 bg-[#2868F3] mr-2"></span>
                      +24 secs
                      <span className="ml-2 sm:ml-[46px] text-[#20232C] font-semibold text-xs">
                        40%
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-[#E68C33] mr-2"></span>
                      No replies
                      <span className="ml-2 sm:ml-10 text-[#20232C] font-semibold text-xs">
                        10%
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-10 mt-auto">
              <p className="text-xs text-[#9199B0] font-medium flex items-center border-t border-[#F3F4F6] px-4 py-4 gap-1">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards - Modified for full width */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Card 4 - Live Chat Trends - made more responsive */}
          <div className="w-full lg:w-2/3 p-4 border border-[#F3F4F6] rounded-lg flex flex-col bg-white">
            <p className="font-semibold text-sm text-[#20232C] border-b border-[#F3F4F6] -mx-4 px-4 pb-3">
              Live chat trends
            </p>
            <div className="mt-3 flex-1 h-[200px]">
              <Line data={liveChatData} options={liveChatOptions} />
            </div>
            <div className="h-10 mt-auto">
              <p className="text-xs text-[#9199B0] font-medium flex items-center border-t border-[#F3F4F6] -mx-4 px-4 py-4 gap-1">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
              </p>
            </div>
          </div>
          
          {/* Card 5 - Avg. Handling Time by Agent */}
          <div className="w-full lg:w-1/3 p-4 border border-[#F3F4F6] rounded-lg flex flex-col bg-white">
            <div className="font-semibold text-sm text-[#20232C] border-b border-[#F3F4F6] -mx-4 px-4 py-3">
              Avg. Handling time by Agent
            </div>
            <div className="h-[200px] overflow-y-auto">
              <div className="p-3 flex flex-col gap-3">
                <div className="flex w-full gap-2 text-left text-[#C1C5D2] text-xs font-semibold">
                  <div className="w-16">ID</div>
                  <div className="flex-1">Name</div>
                  <div className="w-24 text-left">Time(in sec)</div>
                </div>
                {agentData.map((agent, idx) => (
                  <div key={idx} className="flex gap-2 text-[#9199B0] text-xs font-medium">
                    <div className="w-16">{agent.id}</div>
                    <div className="flex-1">{agent.name}</div>
                    <div className="w-24 text-[#20232C]">{agent.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-10 mt-auto">
              <p className="text-xs text-[#9199B0] font-medium flex items-center border-t border-[#F3F4F6] -mx-4 px-4 py-4 gap-1">
                <i className="ri-information-line text-[#9199B0] w-4 h-4"></i>
                This information is based on last week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;