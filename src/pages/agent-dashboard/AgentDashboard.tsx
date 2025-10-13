import AgentDashboardDate from "@/components/agent-dashboard/dashboard/AgentDashboardDate";
import EventListTable from "@/components/agent-dashboard/dashboard/EventListTable";
import UpcomingEvents from "@/components/agent-dashboard/dashboard/UpcomingEvents";

const AgentDashboard = () => {
  return (
    <div>
      <UpcomingEvents />
      <div className="flex gap-5 mt-8">
        <EventListTable />
        <AgentDashboardDate />
      </div>
    </div>
  );
};

export default AgentDashboard;
