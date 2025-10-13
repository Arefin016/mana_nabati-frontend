import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col px-10 overflow-y-auto h-screen">
          <Header />
          <div className="flex-1 overflow-y-auto pb-10 scrollbar-hide">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
