import React from "react";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UseContainer from "../Pages/UserContainer/UserContainer";
import LoginContent from "../Pages/Login/LoginContent";
import TruckDriverAttendance from "../Pages/DriverAttendance/TruckDriverAttendance";

import TruckBooking from "../Pages/TruckBooking/TrucksBookings";
import CottonBooking from "../Pages/BiltyBooking/CottonBooking";
import MechanicReg from "../Pages/Registration/MechanicReg";
import RikshawReg from "../Pages/Registration/RikshawReg";
import BupariReg from "../Pages/Registration/BupariReg";
import SpairShopReg from "../Pages/Registration/SpairShopReg";
import ServiceStaReg from "../Pages/Registration/ServiceStaReg";
import HotelReg from "../Pages/Registration/HotelReg";
import LaboursReg from "../Pages/Registration/LaboursReg";
import DriverReg from "../Pages/Registration/DriverReg";
import GudsTransReg from "../Pages/Registration/GudsTransReg";
import TrucksBookings from "../Pages/TruckBooking/TrucksBookings";
import Review from "../Pages/Review/Review";
import Ads from "../Pages/Ads/Ads";
import Vehicles from "../Pages/Vehicles/Vehicles";
import Emergency from "../Pages/Emergency/Emergency";
import AllUsers from "../Pages/AllUsers/AllUsers";
export const AdminRoutes = [
  {
    path: "/",
    component: <LoginContent />,
  },
  {
    path: "/dashboard",
    component: (
      <UseContainer activePage={<Dashboard />} headerTitle={"Dashboard"} />
    ),
  },
  {
    path: "/driverAttendance",
    component: (
      <UseContainer
        activePage={<TruckDriverAttendance />}
        headerTitle={"Truck Driver Attendance"}
      />
    ),
  },

  ,


  {
    path: "/truckBooking",
    component: (
      <UseContainer
        activePage={<TruckBooking />}
        headerTitle={"Goods Transport Booking"}
      />
    ),
  },

  {
    path: "/bookings",
    component: (
      <UseContainer activePage={<CottonBooking />} headerTitle={"Booking"} />
    ),
  },

  {
    path: "/mechanicRegistration",
    component: (
      <UseContainer
        activePage={<MechanicReg />}
        headerTitle={"Mechanic Registration"}
      />
    ),
  },

  {
    path: "/rikshawRegistration",
    component: (
      <UseContainer
        activePage={<RikshawReg />}
        headerTitle={"Rikshaw  Registration"}
      />
    ),
  },

  {
    path: "/bupariRegistration",
    component: (
      <UseContainer
        activePage={<BupariReg />}
        headerTitle={"Bupari  Registration"}
      />
    ),
  },

  {
    path: "/spairShopRegistration",
    component: (
      <UseContainer
        activePage={<SpairShopReg />}
        headerTitle={"Spair Parts Shop  Registration"}
      />
    ),
  },

  {
    path: "/serviceStationRegistration",
    component: (
      <UseContainer
        activePage={<ServiceStaReg />}
        headerTitle={"Service Station Registration"}
      />
    ),
  },

  {
    path: "/hotelRegistration",
    component: (
      <UseContainer
        activePage={<HotelReg />}
        headerTitle={"Hotel Registration"}
      />
    ),
  },

  {
    path: "/labourRegistration",
    component: (
      <UseContainer
        activePage={<LaboursReg />}
        headerTitle={"Labours Registration"}
      />
    ),
  },

  {
    path: "/driverRegistration",
    component: (
      <UseContainer
        activePage={<DriverReg />}
        headerTitle={"Drivers Registration"}
      />
    ),
  },

  {
    path: "/gudstransRegistration",
    component: (
      <UseContainer
        activePage={<GudsTransReg />}
        headerTitle={"Guds Transport Registration"}
      />
    ),
  },

  {
    path: "/trucksBookings",
    component: (
      <UseContainer
        activePage={<TrucksBookings />}
        headerTitle={"Truck Booking"}
      />
    ),
  },
  {
    path: "/reviews",
    component: <UseContainer activePage={<Review />} headerTitle={"Reviews"} />,
  },
  {
    path: "/ads",
    component: <UseContainer activePage={<Ads />} headerTitle={"Ads"} />,
  },
  {
    path: "/vehicles",
    component: (
      <UseContainer activePage={<Vehicles />} headerTitle={"Vehicles"} />
    ),
  },
  {
    path: "/emergency",
    component: (
      <UseContainer
        activePage={<Emergency />}
        headerTitle={"Mechanic Emergency"}
      />
    ),
  },
  {
    path: "/users",
    component: (
      <UseContainer activePage={<AllUsers />} headerTitle={"Register Users"} />
    ),
  },
];
