import AgentDashboardEventCalendar from "@/components/agent-dashboard/dashboard/AgentDashboardEventCalendar";
import EventListTable from "@/components/agent-dashboard/dashboard/EventListTable";
import UpcomingEvents from "@/components/agent-dashboard/dashboard/UpcomingEvents";
import { useAppDispatch } from "@/redux/hooks";
import { setHeader } from "@/redux/slices/headerSlice";
import { useEffect } from "react";

const AgentDashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setHeader({
        title: "Dashboard",
        desc: "Welcome back, Andrei",
        isAddBtn: false,
      })
    );
  }, [dispatch]);

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
