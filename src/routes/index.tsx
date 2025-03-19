import Home from "@/views/Home";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Order from "@/views/Order";
import Settings from "@/views/Settings";
import Statistic from "@/views/Statistics";
import { createBrowserRouter } from "react-router";
import { AuthRouter, ProtectedRouter } from "./Routes";

const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <AuthRouter><Login /></AuthRouter>
  // },
  {
    path: "/",
    // element: <ProtectedRouter><Home /></ProtectedRouter>
    element: <Home />
  },
  {
    path: "/order",
    // element: <ProtectedRouter><Order /></ProtectedRouter>
    element: <Order />
  },
  {
    path: "/statistics",
    // element: <ProtectedRouter><Statistic /></ProtectedRouter>
    element: <Statistic />
  },
  {
    path: "/settings",
    // element: <ProtectedRouter><Settings /></ProtectedRouter>
    element: <Settings />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router