import BookedEventListTable from "@/components/agent-dashboard/events/BookedEventListTable";
import { useAppDispatch } from "@/redux/hooks";
import { setHeader } from "@/redux/slices/headerSlice";
import { useEffect } from "react";

const Events = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setHeader({
        title: "Upcoming Events",
        desc: "Your upcoming events at a glance",
        isAddBtn: true,
      })
    );
  }, [dispatch]);

  return (
    <div>
      <BookedEventListTable />
    </div>
  );
};

export default Events;
