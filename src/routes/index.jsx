import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Error from "../components/Error";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddService from "../pages/Dashboard/AddService";
import AllUsers from "../pages/Dashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/services", element: <Services /> },
      { path: "/dashboard/add-service", element: <AddService /> },
      { path: "/dashboard/users", element: <AllUsers /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
