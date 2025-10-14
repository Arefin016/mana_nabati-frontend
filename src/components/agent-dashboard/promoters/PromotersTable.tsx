import { DeleteSvg, EditSvg, RecentIconSvg } from "@/icons";

interface Event {
  id: string;
  name: string;
  artist: string;
  promoter: string;
  venue: string;
  date: string;
  time: string;
  sales: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

const eventsData: Event[] = [
  {
    id: "#BK-2024123",
    name: "The Midnight Hour",
    artist: "DJ Nova",
    promoter: "Top Music",
    venue: "Arena Club, Berlin, NY",
    date: "Sat, Oct 12",
    time: "7:00 PM - 10:00 PM",
    sales: "$500.00",
    status: "Confirmed",
  },
  {
    id: "#BK-2024123",
    name: "Holiday Spectacular",
    artist: "Robinhood",
    promoter: "Sarah Lee",
    venue: "Hollywood Bowl, California",
    date: "Mon, Oct 25",
    time: "10:00 PM - 12:00 PM",
    sales: "$400.30",
    status: "Pending",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
  {
    id: "#BK-2024123",
    name: "Rock Festival",
    artist: "Kingston",
    promoter: "Sarah Lee",
    venue: "Nortz Club, Washington DC",
    date: "Wed, Oct 23",
    time: "6:00 PM - 8:00 PM",
    sales: "$2000.00",
    status: "Cancelled",
  },
];

const statusStyles: Record<Event["status"], string> = {
  Confirmed: "bg-green-100 text-[#0CAF60]",
  Pending: "bg-yellow-100 text-[#FFD023]",
  Cancelled: "bg-red-100 text-[#E03137]",
};

const PromotersTable = () => {
  return (
    <div className="bg-white p-6 rounded-[8px] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#212B36]">
          Promoter Directory
        </h2>
        <button className="text-sm text-gray-500 border border-[#F4F6F8] rounded px-3 py-1 hover:bg-gray-50 flex items-center gap-1">
          Recent
          <RecentIconSvg />
        </button>
      </div>

      <div className="overflow-x-auto rounded-[8px]">
        <table className="w-full text-left text-sm text-gray-600 rounded-[8px]">
          <thead className="border-b bg-[#F9FAFB]">
            <tr>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Name
              </th>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Contact Number
              </th>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Email
              </th>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Company
              </th>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Rating
              </th>
              <th className="py-3 px-4 text-[#212B36] text-base font-normal">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {eventsData.map((event) => (
              <tr
                key={event.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium text-[#637381]">{event.name}</p>
                    <p className="text-xs text-[#637381] mt-1">{event.id}</p>
                  </div>
                </td>

                <td className="py-3 px-4 text-[#637381] font-medium">
                  {event.artist}
                </td>
                <td className="py-3 px-4 text-[#637381]">{event.promoter}</td>
                <td className="py-3 px-4 text-[#637381]">{event.venue}</td>

                <td className="py-3 px-4">
                  <p className="text-[#637381] text-sm">{event.date}</p>
                  <p className="text-xs text-[#637381]">{event.time}</p>
                </td>

                <td className="py-3 px-4 font-normal text-[#637381] text-sm">
                  {event.sales}
                </td>

                <td className="py-3 px-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-[6px] font-medium ${
                      statusStyles[event.status]
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <button className="border border-[#F4F6F8] p-1 rounded mr-2 cursor-pointer">
                    <DeleteSvg />
                  </button>
                  <button className="border border-[#F4F6F8] p-1 rounded mr-2 cursor-pointer">
                    <EditSvg />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotersTable;
