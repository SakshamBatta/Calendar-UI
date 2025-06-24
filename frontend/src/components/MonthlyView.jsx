import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaBasketballBall } from "react-icons/fa";

const MonthlyView = () => {
  const events = [
    {
      title: "Music Event",
      date: "2025-06-24",
      icon: <BsMusicNoteBeamed className="text-pink-600 text-xl" />,
    },
    {
      title: "Basketball Match",
      date: "2025-06-26",
      icon: <FaBasketballBall className="text-pink-600 text-xl" />,
    },
  ];

  const renderEventContent = (eventInfo) => {
    const matchedEvent = events.find(
      (evt) => evt.title === eventInfo.event.title
    );
    return (
      <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 to-yellow-100 rounded-xl shadow p-1">
        {matchedEvent?.icon}
      </div>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      height="auto"
      headerToolbar={{
        start: "title",
        end: "prev,next",
      }}
      titleFormat={{ year: "numeric", month: "long" }}
      events={events}
      eventContent={renderEventContent}
    />
  );
};

export default MonthlyView;
