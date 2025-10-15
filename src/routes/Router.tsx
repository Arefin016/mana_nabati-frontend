import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

// Auth pages
import SignIn from "../pages/auth/sign-in/SignIn";
import UserRole from "@/pages/auth/user-role/UserRole";
import AgentSignUp from "@/pages/auth/agent-signup/AgentSignUp";
import SignUp from "@/pages/auth/sign-up/SignUp";
import Verify from "@/pages/auth/verify/Verify";
import EmailVerificationSuccessful from "@/pages/auth/email-verification-successful/EmailVerificationSuccessful";
import ForgotPassword from "@/pages/auth/forgot-password/ForgotPassword";
import UpdatePassword from "@/pages/auth/update-password/UpdatePassword";
import PasswordUpdate from "@/pages/auth/password-update/PasswordUpdate";

// Agent dashboard pages
import Events from "@/pages/agent-dashboard/Events";
import AgentDashboard from "@/pages/agent-dashboard/AgentDashboard";
import Artists from "@/pages/agent-dashboard/Artists";
import Promoters from "@/pages/agent-dashboard/Promoters";
import Statistics from "@/pages/agent-dashboard/Statistics";
import Settings from "@/pages/agent-dashboard/Settings";
import PromotorDashboard from "@/pages/promotor-dashboard/PromotorDashboard";
import PromotorEvents from "@/pages/promotor-dashboard/PromotorEvents";
import PromotorSettings from "@/pages/promotor-dashboard/PromotorSettings";
import ArtistDashboard from "@/pages/artist-dashboard/ArtistDashboard";
import AiAssistant from "@/pages/artist-dashboard/AiAssistant";
import Profile from "@/pages/artist-dashboard/Profile";
import EventDetails from "@/pages/agent-dashboard/EventDetails";

const userRole = localStorage.getItem("userRole");

let dashboardRoutes: RouteObject[] = [];

if (userRole === "Agency") {
  dashboardRoutes = [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <AgentDashboard /> },
        { path: "events", element: <Events /> },
        { path: "events/:eventId", element: <EventDetails /> },
        { path: "artists", element: <Artists /> },
        { path: "promoters", element: <Promoters /> },
        { path: "statistics", element: <Statistics /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ];
} else if (userRole === "Artist") {
  dashboardRoutes = [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <ArtistDashboard /> },
        { path: "ai-assistant", element: <AiAssistant /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ];
} else if (userRole === "Promoter") {
  dashboardRoutes = [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <PromotorDashboard /> },
        { path: "promotor-events", element: <PromotorEvents /> },
        { path: "promotor-settings", element: <PromotorSettings /> },
      ],
    },
  ];
}
// Combine auth routes + dashboard routes
export const router = createBrowserRouter([
  ...dashboardRoutes,
  {
    path: "/auth",
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "user-role", element: <UserRole /> },
      { path: "agent-signup", element: <AgentSignUp /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "verify", element: <Verify /> },
      { path: "success", element: <EmailVerificationSuccessful /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "update-password", element: <UpdatePassword /> },
      { path: "password-update", element: <PasswordUpdate /> },
    ],
  },
]);
