import Home from "@/views/Home";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Order from "@/views/Order";
import Register from "@/views/Register";
import Settings from "@/views/Settings";
import Statistic from "@/views/Statistics";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/statistics",
    element: <Statistic />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router