import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import MopedIcon from '@mui/icons-material/Moped';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
        name: "Truck Driver",
        path: "/driverAttendance",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Rikshaw Driver",
        path: "/rikshawDriverAttendance",
        icon: <MopedIcon fontSize="small" />,
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
    path: "/cottonBooking",
    icon: <LocalShippingIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [
      {
        name: "Cotton Booking",
        path: "/cottonBooking",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Sooter Booking",
        path: "/sooterBooking",
        icon: <FireTruckIcon fontSize="small" />,
      },
      {
        name: "Clothes Booking",
        path: "/clothBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Scrab Booking",
        path: "/scrabBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Oil Booking",
        path: "/oilBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Machinery Booking",
        path: "/machineBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Wanda Booking",
        path: "/wandaBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Seeds Booking",
        path: "/seedBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Vegetables/Rice Booking",
        path: "/vegetableBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Hardware Booking",
        path: "/hardwareBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Animal Booking",
        path: "/animalBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Poltary Booking",
        path: "/poltryBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Electronics Booking",
        path: "/electronicBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "House Things Booking",
        path: "/housethingsBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Furniture Booking",
        path: "/furnitureBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Other Booking",
        path: "/othersBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Nursary Booking",
        path: "/nursryBooking",
        icon: <MopedIcon fontSize="small" />,
      },
      {
        name: "Cement/Rait Booking",
        path: "/cementBooking",
        icon: <MopedIcon fontSize="small" />,
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
    name: "Truck Booking",
    path: "/trucksBookings",
    icon: <DashboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Booking",
    path: "/Booking",
    icon: <DashboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
];
