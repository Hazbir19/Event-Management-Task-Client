import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventsPage";
import MainLayouts from "./../Layouts/MainLayouts";
import MyEvent from "../Pages/MyEvent";
import Add_Events from "../Pages/Add_Events";
import LoginRegister from "../Components/LoginRegister";
import EventsPage from "../Pages/EventsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <EventsPage></EventsPage>,
      },
      {
        path: "/myEvents",
        element: <MyEvent></MyEvent>,
      },
      {
        path: "/addEvents",
        element: <Add_Events></Add_Events>,
      },
      {
        path: "/login",
        element: <LoginRegister></LoginRegister>,
      },
    ],
  },
]);
