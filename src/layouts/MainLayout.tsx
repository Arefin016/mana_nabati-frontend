import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="flex h-screen ">
        <Sidebar />
        <div className="flex-1 flex flex-col px-10">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
