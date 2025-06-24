import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const WeeklyView = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const events = [
    {
      title: "Meeting - John",
      start: "2025-06-23T09:00:00",
      end: "2025-06-23T14:00:00",
      backgroundColor: "#fbcfe8",
      textColor: "#000000",
    },
    {
      title: "Code Review - Alex",
      start: "2025-06-24T13:00:00",
      end: "2025-06-24T16:30:00",
      backgroundColor: "#fbcfe8",
      textColor: "#000000",
    },
    {
      title: "Lunch Break",
      start: "2025-06-25T12:00:00",
      end: "2025-06-25T15:00:00",
      backgroundColor: "#fbcfe8",
      textColor: "#000000",
    },
    {
      title: "Demo Presentation",
      start: "2025-06-26T10:00:00",
      end: "2025-06-26T14:30:00",
      backgroundColor: "#fbcfe8",
      textColor: "#000000",
    },
    {
      title: "Weekend Planning",
      start: "2025-06-27T15:00:00",
      end: "2025-06-27T20:00:00",
      backgroundColor: "#fbcfe8",
      textColor: "#000000",
    },
  ];

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const handleDatesSet = (data) => {
    setTimeout(() => {
      const headerEls = document.querySelectorAll(".fc-col-header-cell");
      headerEls.forEach((el) => {
        const date = el.getAttribute("data-date");
        if (date === selectedDate) {
          el.classList.add("selected-day");
        } else {
          el.classList.remove("selected-day");
        }
      });
    }, 0);
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        slotMinTime="06:00:00"
        slotMaxTime="20:00:00"
        events={events}
        height="auto"
        dayHeaderFormat={{ weekday: "short", day: "numeric" }}
        dateClick={handleDateClick}
        datesSet={handleDatesSet}
      />
    </div>
  );
};

export default WeeklyView;
