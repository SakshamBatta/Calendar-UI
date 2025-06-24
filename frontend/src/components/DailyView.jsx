import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaSun, FaBasketballBall } from "react-icons/fa"; // Fixed here

const DailyView = () => {
  const [selectedDate, setSelectedDate] = useState("Tue 25");

  const dates = [
    "Sun 23",
    "Mon 24",
    "Tue 25",
    "Wed 26",
    "Thu 27",
    "Fri 28",
    "Sat 1",
  ];

  const dummyEvents = [
    {
      id: 1,
      time: "8:00 AM - 4:00 PM",
      title: "Project Deadline - Charlie",
      icon: <BsMusicNoteBeamed className="text-xl" />,
      user: "Brine",
    },
    {
      id: 2,
      time: "10:00 PM - 5:00 AM",
      title: "Project Deadline - Charlie",
      icon: <FaBasketballBall className="text-xl" />,
      user: "Brine",
    },
  ];

  return (
    <div>
      <div className="flex justify-between text-center mb-4">
        {dates.map((day, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedDate(day)}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <span
              className={`${
                selectedDate === day
                  ? "bg-pink-100 text-pink-600 rounded-full px-2 py-1"
                  : "text-gray-700"
              }`}
            >
              {day.split(" ")[0]}
            </span>
            <span
              className={`mt-1 ${
                selectedDate === day
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {day.split(" ")[1]}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start bg-gradient-to-r from-pink-100 to-yellow-100 p-4 rounded-xl shadow relative"
          >
            <div className="absolute top-2 right-2 text-gray-600">
              <FiMoreVertical />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-xs text-gray-500">{event.time}</span>
              <div className="flex items-center space-x-2">
                {event.icon}
                <span className="font-semibold text-sm">{event.title}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <FaSun className="text-yellow-400" />
                <span>{event.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyView;
