import AgentDashboardEventCalendar from "@/components/agent-dashboard/dashboard/AgentDashboardEventCalendar";
import EventListTable from "@/components/agent-dashboard/dashboard/EventListTable";
import UpcomingEvents from "@/components/agent-dashboard/dashboard/UpcomingEvents";

const AgentDashboard = () => {
  return (
    <div>
      <UpcomingEvents />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        <div className="col-span-2">
          <EventListTable />
        </div>
        <div className="col-span-1">
          <AgentDashboardEventCalendar />
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
