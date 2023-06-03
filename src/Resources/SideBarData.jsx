import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ElectricMopedIcon from "@mui/icons-material/ElectricMoped";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import GroupIcon from "@mui/icons-material/Group";
export const AdminSideBarData = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },

  {
    name: "Driver Attendance",
    path: "/driverAttendance",
    icon: <AnnouncementIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [
      {
        name: "Attendance",
        path: "/driverAttendance",
        icon: <FireTruckIcon fontSize="small" />,
      },
    ],
  },
  {
    name: "Labour Booking",
    path: "/labourBooking",
    icon: <AccessibilityNewIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Rikshaw Booking",
    path: "/rikshawBooking",
    icon: <ElectricMopedIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Builty Booking",
    path: "/bookings",
    icon: <LocalShippingIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [
      {
        name: "Bookings",
        path: "/bookings",
        icon: <FireTruckIcon fontSize="small" />,
      },
    ],
  },
  {
    name: "Registration",
    path: "/mechanicRegistration",
    icon: <ElectricMopedIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [
      {
        name: "Mechanic Registration",
        path: "/mechanicRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Rikshaw Registration",
        path: "/rikshawRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Bupari Registration",
        path: "/bupariRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "SpairParts Shop Reg",
        path: "/spairShopRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Service Station Reg",
        path: "/serviceStationRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Hotel Registration",
        path: "/hotelRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Labour Registration",
        path: "/labourRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Driver Registration",
        path: "/driverRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Guds Registration",
        path: "/gudstransRegistration",
        icon: <FireTruckIcon fontSize="small" />,
      },
    ],
  },
  {
    name: "Goods Transport",
    path: "/trucksBookings",
    icon: <LocalShippingIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Reviews",
    path: "/reviews",
    icon: <ReviewsIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Ads",
    path: "/ads",
    icon: <CampaignIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Vehicles",
    path: "/vehicles",
    icon: <LocalShippingIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Emergency",
    path: "/emergency",
    icon: <AddAlertIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Register Users",
    path: "/users",
    icon: <GroupIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
];
