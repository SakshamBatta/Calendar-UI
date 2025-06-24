import React, { useState } from "react";
import DailyView from "./DailyView";
import WeeklyView from "./WeeklyView";
import MonthlyView from "./MonthlyView";

const CalendarWrapper = () => {
  const [selectedTab, setSelectedTab] = useState("Daily");

  const renderView = () => {
    if (selectedTab === "Daily") return <DailyView />;
    if (selectedTab === "Weekly") return <WeeklyView />;
    if (selectedTab === "Monthly") return <MonthlyView />;
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <button className="text-pink-500 font-semibold">+ New event</button>
      </div>

      {/* Tabs */}
      <div className="flex justify-between bg-gray-100 rounded-full p-1 mb-4">
        {["Daily", "Weekly", "Monthly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-1 py-2 rounded-full text-sm font-medium ${
              selectedTab === tab
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render respective view */}
      {renderView()}
    </div>
  );
};

export default CalendarWrapper;
