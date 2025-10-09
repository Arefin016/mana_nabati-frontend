import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../pages/dashboard/Dashboard";
import SignIn from "../pages/auth/sign-in/SignIn";
import UserRole from "@/pages/auth/user-role/UserRole";
import AgentSignUp from "@/pages/auth/agent-signup/AgentSignUp";
import SignUp from "@/pages/auth/sign-up/SignUp";
import Verify from "@/pages/auth/verify/Verify";
import EmailVerificationSuccessful from "@/pages/auth/email-verification-successful/EmailVerificationSuccessful";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "user-role",
        element: <UserRole />,
      },
      {
        path: "agent-signup",
        element: <AgentSignUp />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "success",
        element: <EmailVerificationSuccessful />,
      },
    ],
  },
]);
