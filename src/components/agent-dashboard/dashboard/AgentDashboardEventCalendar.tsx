import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { DateRangeCalendar } from "./DateRangeCalendar";

const AgentDashboardEventCalendar = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 9),
    to: new Date(2025, 5, 26),
  });

  // Mock event data
  const events = [
    {
      day: "Sat",
      date: "3",
      event: "The Midnight Hour",
      dj: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM - 12:00 PM",
    },
    {
      day: "Sun",
      date: "4",
      event: "The Midnight Hour",
      dj: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM - 12:00 PM",
    },
    {
      day: "Mon",
      date: "7",
      event: "The Midnight Hour",
      dj: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM - 12:00 PM",
    },
    {
      day: "Mon",
      date: "7",
      event: "The Midnight Hour",
      dj: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM - 12:00 PM",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-[8px] max-w-[1180px] w-full">
      <DateRangeCalendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
      />
      {/* Events Section */}
      <div className="mt-4 flex flex-col gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-3 rounded-lg flex items-center justify-between"
          >
            <div className="bg-primary01 px-4 py-2 rounded-md text-primary-foreground flex flex-col items-center">
              <div className="font-semibold">{event.date}</div>
              <div className="font-semibold">{event.day}</div>
            </div>
            <div className="text-center flex-1 mx-4">
              <div className="text-sm">
                {event.event} · {event.dj}
              </div>
              <div className="text-xs text-gray-200">{event.hashtag}</div>
            </div>
            <div className="text-sm text-right">
              <div>⏰</div>
              <div>{event.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDashboardEventCalendar;
