import ConfirmRider from "@/components/agent-dashboard/events/event-details/ConfirmRider";
import Contacts from "@/components/agent-dashboard/events/event-details/Contacts";
import GuestList from "@/components/agent-dashboard/events/event-details/GuestList";
import HotelDinner from "@/components/agent-dashboard/events/event-details/HotelDinner";
import RunningOrder from "@/components/agent-dashboard/events/event-details/RunningOrder";
import Transportation from "@/components/agent-dashboard/events/event-details/Transportation";
import TravelInformation from "@/components/agent-dashboard/events/event-details/TravelInformation";
import Venue from "@/components/agent-dashboard/events/event-details/Venue";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { useAppDispatch } from "@/redux/hooks";
import { setHeader } from "@/redux/slices/headerSlice";
import { useEffect, useState } from "react";

const tabs = [
  { id: "Running_Order", label: "Running Order" },
  { id: "Confirm_Rider", label: "Confirm Rider" },
  { id: "Travel_Information", label: "Travel Information" },
  { id: "Guest_List", label: "Guest List" },
  { id: "Transportation", label: "Transportation" },
  { id: "Hotel_Dinner", label: "Hotel & Dinner" },
  { id: "Venue", label: "Venue" },
  { id: "Contacts", label: "Contacts" },
];

export default function EventDetails() {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>("Running_Order");

  useEffect(() => {
    dispatch(
      setHeader({
        title: "The Midnight Hour (Corina McCoy)",
        desc: "#BK-2024123",
        isAddBtn: false,
      })
    );
  }, [dispatch]);

  return (
    <section className="bg-white p-6 rounded-[8px] w-full">
      <div className="w-full">
        <AnimatedTabs
          tabs={tabs}
          onChange={(tabId) => {
            console.log("Tab changed:", tabId);
            setActiveTab(tabId);
          }}
        />
      </div>

      <div className="py-10 px-20">
        {activeTab === "Running_Order" && <RunningOrder />}
        {activeTab === "Confirm_Rider" && <ConfirmRider />}
        {activeTab === "Travel_Information" && <TravelInformation />}
        {activeTab === "Guest_List" && <GuestList />}
        {activeTab === "Transportation" && <Transportation />}
        {activeTab === "Hotel_Dinner" && <HotelDinner />}
        {activeTab === "Venue" && <Venue />}
        {activeTab === "Contacts" && <Contacts />}
      </div>
    </section>
  );
}
