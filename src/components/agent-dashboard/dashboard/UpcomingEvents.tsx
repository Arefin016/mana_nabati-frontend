import {
  UpcomingEventsSvg,
  EventsCompletedSignSvg,
  BookingRequestsSvg,
  TotalArtistSvg,
} from "@/icons";
import UpcomingEventsCard from "./UpcomingEventsCard";

const UpcomingEvents = () => {
  return (
    <section className="flex gap-6">
      <UpcomingEventsCard
        title="Upcoming Events"
        value={20}
        percent={16}
        icon={<UpcomingEventsSvg />}
        color="#F2F8FF"
        percentColor="#0CAF60"
        bgPercentColor="#E6FDF2"
        subtitle="last month"
      />
      <UpcomingEventsCard
        title="Events Completed"
        value={30}
        percent={16}
        icon={<EventsCompletedSignSvg />}
        color="#F2F8FF"
        percentColor="#0CAF60"
        bgPercentColor="#E6FDF2"
        subtitle="last month"
      />
      <UpcomingEventsCard
        title="Booking Request"
        value={30}
        percent={16}
        icon={<UpcomingEventsSvg />}
        barChartIcon={<BookingRequestsSvg />}
        color="#F2F8FF"
        percentColor="#0CAF60"
        bgPercentColor="#E6FDF2"
        subtitle="last month"
      />
      <UpcomingEventsCard
        title="Total Artist"
        value={30}
        percent={16}
        icon={<TotalArtistSvg />}
        color="#F2F8FF"
        percentColor="#0CAF60"
        bgPercentColor="#E6FDF2"
        subtitle="last month"
      />
    </section>
  );
};

export default UpcomingEvents;
