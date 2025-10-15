import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { DateRangeCalendar } from "./DateRangeCalendar";
import { Clock } from "lucide-react";

const AgentDashboardEventCalendar = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 9),
    to: new Date(2025, 5, 26),
  });

  const events = [
    {
      day: "Sat",
      date: "3",
      event: "The Midnight Hour",
      artist: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM-12:00 PM",
    },
    {
      day: "Sun",
      date: "4",
      event: "The Midnight Hour",
      artist: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM-12:00 PM",
    },
    {
      day: "Mon",
      date: "7",
      event: "The Midnight Hour",
      artist: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM-12:00 PM",
    },
    {
      day: "Mon",
      date: "7",
      event: "The Midnight Hour",
      artist: "DJ Nova",
      hashtag: "#BK-2024123",
      time: "10:00 PM-12:00 PM",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg max-w-[1180px] w-full">
      <DateRangeCalendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
      />

      {/* Events List */}
      <div className="mt-6 flex flex-col gap-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >
            {/* Date Box */}
            <div className="bg-blue-600 text-white rounded-md w-12 h-12 flex flex-col justify-center items-center leading-tight">
              <div className="text-base font-semibold">{event.date}</div>
              <div className="text-xs font-medium">{event.day}</div>
            </div>

            {/* Event Info */}
            <div className="flex-1 mx-4">
              <div className="text-[15px] font-medium text-gray-900">
                {event.event}{" "}
                <span className="text-gray-500">• {event.artist}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">{event.hashtag}</div>
            </div>

            {/* Time */}
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDashboardEventCalendar;
