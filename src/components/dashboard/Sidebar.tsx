import { NavLink } from "react-router";
import logo from "../../assets/logo/final-logo.png";
import logoText from "../../assets/logo/inimal.png";
import {
  ActiveAiAssistantSvg,
  ActiveArtistsSvg,
  ActiveDashboardSvg,
  ActiveEventSvg,
  ActiveProfileSvg,
  ActivePromotersSvg,
  ActiveSettingsSvg,
  ActiveStatisticsSvg,
  InActiveAiAssistantSvg,
  InactiveArtistsSvg,
  InactiveDashboardSvg,
  InactiveEventSvg,
  InActiveProfileSvg,
  InactivePromotersSvg,
  InactiveSettingsSvg,
  InactiveStatisticsSvg,
} from "@/icons";

const Sidebar = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="w-64 h-screen bg-[#FFF] text-white flex flex-col p-4">
      {/* This is the logo section */}
      <div className="flex flex-row items-center justify-center gap-3">
        <img className="w-[55px] h-[55px] object-cover" src={logo} alt="Logo" />
        <img
          className="w-[96px] h-[25px] object-cover"
          src={logoText}
          alt="Logo Text"
        />
      </div>
      {/* This is the menu section   */}
      {userRole === "Agency" && (
        <>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveDashboardSvg /> : <InactiveDashboardSvg />}
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveEventSvg /> : <InactiveEventSvg />}
                  <span>Events</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/artists"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveArtistsSvg /> : <InactiveArtistsSvg />}
                  <span>Artists</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/promoters"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActivePromotersSvg /> : <InactivePromotersSvg />}
                  <span>Promoters</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <ActiveStatisticsSvg />
                  ) : (
                    <InactiveStatisticsSvg />
                  )}
                  <span>Statistics</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveSettingsSvg /> : <InactiveSettingsSvg />}
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </nav>
        </>
      )}
      {userRole === "Promoter" && (
        <>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveDashboardSvg /> : <InactiveDashboardSvg />}
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/promotor-events"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveDashboardSvg /> : <InactiveDashboardSvg />}
                  <span>Events</span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/promotor-settings"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveDashboardSvg /> : <InactiveDashboardSvg />}
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </nav>
        </>
      )}

      {userRole === "Artist" && (
        <>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 mt-10 text-lg font-medium p-2 rounded-[8px] ${
                  isActive
                    ? "bg-[#3F97FF] text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveDashboardSvg /> : <InactiveDashboardSvg />}
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/ai-assistant"
              className={({ isActive }) =>
                `flex items-center gap-4 mt-10 text-lg font-medium p-2 rounded-[8px] ${
                  isActive
                    ? "bg-[#3F97FF] text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <ActiveAiAssistantSvg />
                  ) : (
                    <InActiveAiAssistantSvg />
                  )}
                  <span>AI Assistant</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 mt-10 text-lg font-medium p-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-[#294957] hover:text-[#3F97FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ActiveProfileSvg /> : <InActiveProfileSvg />}
                  <span>Profile</span>
                </>
              )}
            </NavLink>
          </nav>
        </>
      )}
    </div>
  );
};

export default Sidebar;
