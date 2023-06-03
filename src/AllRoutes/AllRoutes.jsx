import React from "react";

import Dashboard from "../Pages/Dashboard/Dashboard";

import UseContainer from "../Pages/UserContainer/UserContainer";
import LoginContent from "../Pages/Login/LoginContent";
import TruckDriverAttendance from "../Pages/DriverAttendance/TruckDriverAttendance";
import CreateTruckDrivAttend from "../Components/DriverAttendance/CreateTruckDrivAttend/CreateTruckDrivAttend";
import RikshawDriverAttendance from "../Pages/DriverAttendance/RikshawDriverAttendance";
import CreateRikshawDrivAttend from "../Components/DriverAttendance/CreateRikshawDrivAttend";
import LabourBooking from "../Pages/LabourBooking/LabourBooking";
import CreateLabourBooking from "../Components/CreateLabourBooking/CreateLabourBooking";
import RikshawBooking from "../Pages/RikshawBooking/RikshawBooking";
import CreateRikshawBooking from "../Components/RikshawBooking/CreateRikshawBooking";
import TruckBooking from "../Pages/TruckBooking/TrucksBookings";
import CreateTruckBooking from "../Components/TruckBooking/CreateTruckBooking";
import CottonBooking from "../Pages/BiltyBooking/CottonBooking";
import ClothBooking from "../Pages/BiltyBooking/ClothBooking";
import ScrabBooking from "../Pages/BiltyBooking/ScrabBooking";
import OilBooking from "../Pages/BiltyBooking/OilBooking";
import MachineBooking from "../Pages/BiltyBooking/MachineBooking";
import WandaBooking from "../Pages/BiltyBooking/WandaBooking";
import SeedBooking from "../Pages/BiltyBooking/SeedBooking";
import HardwareBooking from "../Pages/BiltyBooking/HardwareBooking";
import AnimalBooking from "../Pages/BiltyBooking/AnimalBooking";
import PoltryBooking from "../Pages/BiltyBooking/PoltryBooking";
import ElectronicsBooking from "../Pages/BiltyBooking/ElectronicsBooking";
import HouseThingsBooking from "../Pages/BiltyBooking/HouseThingsBooking";
import FurnitureBooking from "../Pages/BiltyBooking/FurnitureBooking";
import OthersBooking from "../Pages/BiltyBooking/othersBooking";
import NursryBooking from "../Pages/BiltyBooking/NursryBooking";
import CementBooking from "../Pages/BiltyBooking/CementBooking";
import SooterBooking from "../Pages/BiltyBooking/SooterBooking";
import MechanicReg from "../Pages/Registration/MechanicReg";
import RikshawReg from "../Pages/Registration/RikshawReg";
import BupariReg from "../Pages/Registration/BupariReg";
import SpairShopReg from "../Pages/Registration/SpairShopReg";
import ServiceStaReg from "../Pages/Registration/ServiceStaReg";
import HotelReg from "../Pages/Registration/HotelReg";
import LaboursReg from "../Pages/Registration/LaboursReg";
import DriverReg from "../Pages/Registration/DriverReg";
import GudsTransReg from "../Pages/Registration/GudsTransReg";
import AddCottonBooking from "../Components/AddBiltyBooking/AddCottonBooking";
import AddSooterBooking from "../Components/AddBiltyBooking/AddSooterBooking";
import AddClothesBooking from "../Components/AddBiltyBooking/AddClothesBooking";
import AddScrabBooking from "../Components/AddBiltyBooking/AddScrabBooking";
import AddOilBooking from "../Components/AddBiltyBooking/AddOilBooking";
import AddMachineryBooking from "../Components/AddBiltyBooking/AddMachineryBooking";
import AddWandaBooking from "../Components/AddBiltyBooking/AddWandaBooking";
import AddSeedsBooking from "../Components/AddBiltyBooking/AddSeedsBooking";
import AddVegetableBooking from "../Components/AddBiltyBooking/AddVegetableBooking";
import AddHardwareBooking from "../Components/AddBiltyBooking/AddHardwareBooking";
import AddAnimalBooking from "../Components/AddBiltyBooking/AddAnimalBooking";
import AddPoltryBooking from "../Components/AddBiltyBooking/AddPoltryBooking";
import AddElectrBooking from "../Components/AddBiltyBooking/AddElectrBooking";
import AddHouseThingBook from "../Components/AddBiltyBooking/AddHouseThingBook";
import AddFurnitureBooking from "../Components/AddBiltyBooking/AddFurnitureBooking";
import AddOtherBooking from "../Components/AddBiltyBooking/AddOtherBooking";
import AddNursaryBooking from "../Components/AddBiltyBooking/AddNursaryBooking";
import AddCementBooking from "../Components/AddBiltyBooking/AddCementBooking";
import AddMechanicReg from "../Components/AddRegistration/AddMechanicReg";
import AddRikshawReg from "../Components/AddRegistration/AddRikshawReg";
import AddBupariReg from "../Components/AddRegistration/AddBupariReg";
import AddSpairpartShopReg from "../Components/AddRegistration/AddSpairpartShopReg";
import AddServiceStaReg from "../Components/AddRegistration/AddServiceStaReg";
import AddHotelReg from "../Components/AddRegistration/AddHotelReg";
import AddLaboursReg from "../Components/AddRegistration/AddLaboursReg";
import AddDriverReg from "../Components/AddRegistration/AddDriverReg";
import AddGudsReg from "../Components/AddRegistration/AddGudsReg";
import Booking from "../Pages/Booking/Booking";
import AddBooking from "../Components/AddBooking/AddBooking";
import TrucksBookings from "../Pages/TruckBooking/TrucksBookings";
import AddTrucksBookings from "../Components/AddTrucksBookings/AddTrucksBookings";

export const AdminRoutes = [
  {
    path: "/",
    component: (
      <LoginContent />
    ),
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
      <UseContainer activePage={<TruckDriverAttendance />}  buttons={[
        {
          content: "New",
          Path: "/create/driverAttendance",
        },
      ]} headerTitle={"Truck Driver Attendance"} />
    ),
  },
  {
    path: "/create/driverAttendance",
    component: (
      <UseContainer activePage={<CreateTruckDrivAttend />}   headerTitle={"Create Truck Driver Attendance"} />
    ),
  },
  {
    path: "/rikshawDriverAttendance",
    component: (
      <UseContainer activePage={<RikshawDriverAttendance />}  buttons={[
        {
          content: "New",
          Path: "/create/rikshawDriverAttendance",
        },
      ]} headerTitle={"Rikshaw Driver Attendance"} />
    ),
  },
  {
    path: "/create/rikshawDriverAttendance",
    component: (
      <UseContainer activePage={<CreateRikshawDrivAttend />}   headerTitle={"Create Rikshaw Driver Attendance"} />
    ),
  },
  {
    path: "/labourBooking",
    component: (
      <UseContainer activePage={<LabourBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/labourBooking",
        },
      ]} headerTitle={"Labour Booking"} />
    ),
  },
  {
    path: "/create/labourBooking",
    component: (
      <UseContainer activePage={<CreateLabourBooking />}   headerTitle={"Create Labour Booking"} />
    ),
  },
  {
    path: "/rikshawBooking",
    component: (
      <UseContainer activePage={<RikshawBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/rikshawBooking",
        },
      ]} headerTitle={"Rikshaw Booking"} />
    ),
  },
  {
    path: "/create/rikshawBooking",
    component: (
      <UseContainer activePage={<CreateRikshawBooking />}   headerTitle={"Create Rikshaw Booking"} />
    ),
  },
  {
    path: "/truckBooking",
    component: (
      <UseContainer activePage={<TruckBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/truckBooking",
        },
      ]} headerTitle={"Truck Booking"} />
    ),
  },
  {
    path: "/create/truckBooking",
    component: (
      <UseContainer activePage={<CreateTruckBooking />}   headerTitle={"Create TRuck Booking"} />
    ),
  },
  {
    path: "/cottonBooking",
    component: (
      <UseContainer activePage={<CottonBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/cottonBooking",
        },
      ]} headerTitle={"Cotton Booking"} />
    ),
  },
  {
    path: "/create/cottonBooking",
    component: (
      <UseContainer activePage={<AddCottonBooking />}   headerTitle={"Create Cotton Booking"} />
    ),
  },
  {
    path: "/clothBooking",
    component: (
      <UseContainer activePage={<ClothBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/clothBooking",
        },
      ]} headerTitle={"Cloth Booking"} />
    ),
  },
  {
    path: "/create/clothBooking",
    component: (
      <UseContainer activePage={<AddClothesBooking />}   headerTitle={"Create Clothes Booking"} />
    ),
  },
  {
    path: "/scrabBooking",
    component: (
      <UseContainer activePage={<ScrabBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/scrabBooking",
        },
      ]} headerTitle={"Scrab Booking"} />
    ),
  },
  {
    path: "/create/scrabBooking",
    component: (
      <UseContainer activePage={<AddScrabBooking />}   headerTitle={"Create Scrab Booking"} />
    ),
  },
  {
    path: "/oilBooking",
    component: (
      <UseContainer activePage={<OilBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/oilBooking",
        },
      ]} headerTitle={"Oil Booking"} />
    ),
  },
  {
    path: "/create/oilBooking",
    component: (
      <UseContainer activePage={<AddOilBooking />}   headerTitle={"Create Oil Booking"} />
    ),
  },
  {
    path: "/machineBooking",
    component: (
      <UseContainer activePage={<MachineBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/machineBooking",
        },
      ]} headerTitle={"Machine Booking"} />
    ),
  },
  {
    path: "/create/machineBooking",
    component: (
      <UseContainer activePage={<AddMachineryBooking />}   headerTitle={"Create Machine Booking"} />
    ),
  },
  {
    path: "/wandaBooking",
    component: (
      <UseContainer activePage={<WandaBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/wandaBooking",
        },
      ]} headerTitle={"Wanda Booking"} />
    ),
  },
  {
    path: "/create/wandaBooking",
    component: (
      <UseContainer activePage={<AddWandaBooking />}   headerTitle={"Create Wanda Booking"} />
    ),
  },
  {
    path: "/seedBooking",
    component: (
      <UseContainer activePage={<SeedBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/seedBooking",
        },
      ]} headerTitle={"Seed Booking"} />
    ),
  },
  {
    path: "/create/seedBooking",
    component: (
      <UseContainer activePage={<AddSeedsBooking />}   headerTitle={"Create Seeds Booking"} />
    ),
  },
  {
    path: "/vegetableBooking",
    component: (
      <UseContainer activePage={<SeedBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/vegetableBooking",
        },
      ]} headerTitle={"Vegetables Booking"} />
    ),
  },
  {
    path: "/create/vegetableBooking",
    component: (
      <UseContainer activePage={<AddVegetableBooking />}   headerTitle={"Create Vegetable/Rice Booking"} />
    ),
  },
  {
    path: "/hardwareBooking",
    component: (
      <UseContainer activePage={<HardwareBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/hardwareBooking",
        },
      ]} headerTitle={"Hardware Booking"} />
    ),
  },
  {
    path: "/create/hardwareBooking",
    component: (
      <UseContainer activePage={<AddHardwareBooking />}   headerTitle={"Create Hardware Booking"} />
    ),
  },
  {
    path: "/animalBooking",
    component: (
      <UseContainer activePage={<AnimalBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/animalBooking",
        },
      ]} headerTitle={"Animal Booking"} />
    ),
  },
  {
    path: "/create/animalBooking",
    component: (
      <UseContainer activePage={<AddAnimalBooking />}   headerTitle={"Create Animal Booking"} />
    ),
  },
  {
    path: "/poltryBooking",
    component: (
      <UseContainer activePage={<PoltryBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/poltryBooking",
        },
      ]} headerTitle={"Poltry Booking"} />
    ),
  },
  {
    path: "/create/poltryBooking",
    component: (
      <UseContainer activePage={<AddPoltryBooking />}   headerTitle={"Create Poltary Booking"} />
    ),
  },
  {
    path: "/electronicBooking",
    component: (
      <UseContainer activePage={<ElectronicsBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/electronicBooking",
        },
      ]} headerTitle={"Electronics Booking"} />
    ),
  },
  {
    path: "/create/electronicBooking",
    component: (
      <UseContainer activePage={<AddElectrBooking />}   headerTitle={"Create Electronics Booking"} />
    ),
  },
  {
    path: "/housethingsBooking",
    component: (
      <UseContainer activePage={<HouseThingsBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/housethingsBooking",
        },
      ]} headerTitle={"House Things Booking"} />
    ),
  },
  {
    path: "/create/housethingsBooking",
    component: (
      <UseContainer activePage={<AddHouseThingBook />}   headerTitle={"Create House Thing Booking"} />
    ),
  },
  {
    path: "/furnitureBooking",
    component: (
      <UseContainer activePage={<FurnitureBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/furnitureBooking",
        },
      ]} headerTitle={"Furniture Booking"} />
    ),
  },
  {
    path: "/create/furnitureBooking",
    component: (
      <UseContainer activePage={<AddFurnitureBooking />}   headerTitle={"Create Furniture Booking"} />
    ),
  },
  {
    path: "/othersBooking",
    component: (
      <UseContainer activePage={<OthersBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/othersBooking",
        },
      ]} headerTitle={"Others Booking"} />
    ),
  },
  {
    path: "/create/othersBooking",
    component: (
      <UseContainer activePage={<AddOtherBooking />}   headerTitle={"Create Others Booking"} />
    ),
  },
  {
    path: "/nursryBooking",
    component: (
      <UseContainer activePage={<NursryBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/nursryBooking",
        },
      ]} headerTitle={"Nursary Booking"} />
    ),
  },
  {
    path: "/create/nursryBooking",
    component: (
      <UseContainer activePage={<AddNursaryBooking />}   headerTitle={"Create Nursary Booking"} />
    ),
  },
  {
    path: "/cementBooking",
    component: (
      <UseContainer activePage={<CementBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/cementBooking",
        },
      ]} headerTitle={"Cement/Rait Booking"} />
    ),
  },
  {
    path: "/create/cementBooking",
    component: (
      <UseContainer activePage={<AddCementBooking />}   headerTitle={"Create Cement/Rait Booking"} />
    ),
  },
  {
    path: "/sooterBooking",
    component: (
      <UseContainer activePage={<SooterBooking />}  buttons={[
        {
          content: "New",
          Path: "/create/sooterBooking",
        },
      ]} headerTitle={"Sooter Booking"} />
    ),
  },
  {
    path: "/create/sooterBooking",
    component: (
      <UseContainer activePage={<AddSooterBooking />}   headerTitle={"Create Sooter Booking"} />
    ),
  },
  {
    path: "/mechanicRegistration",
    component: (
      <UseContainer activePage={<MechanicReg />}  buttons={[
        {
          content: "New",
          Path: "/create/mechanicRegistration",
        },
      ]} headerTitle={"Mechanic Registration"} />
    ),
  },
    {
    path: "/create/mechanicRegistration",
    component: (
      <UseContainer activePage={<AddMechanicReg />}   headerTitle={"Create Mechanic Registration"} />
    ),
  },
  {
    path: "/rikshawRegistration",
    component: (
      <UseContainer activePage={<RikshawReg />}  buttons={[
        {
          content: "New",
          Path: "/create/rikshawRegistration",
        },
      ]} headerTitle={"Rikshaw  Registration"} />
    ),
  },
  {
    path: "/create/rikshawRegistration",
    component: (
      <UseContainer activePage={<AddRikshawReg />}   headerTitle={"Create Riksha Registration"} />
    ),
  },
  {
    path: "/bupariRegistration",
    component: (
      <UseContainer activePage={<BupariReg />}  buttons={[
        {
          content: "New",
          Path: "/create/bupariRegistration",
        },
      ]} headerTitle={"Bupari  Registration"} />
    ),
  },
  {
    path: "/create/bupariRegistration",
    component: (
      <UseContainer activePage={<AddBupariReg />}   headerTitle={"Create Bupari Registration"} />
    ),
  },
  {
    path: "/spairShopRegistration",
    component: (
      <UseContainer activePage={<SpairShopReg />}  buttons={[
        {
          content: "New",
          Path: "/create/spairShopRegistration",
        },
      ]} headerTitle={"Spair Parts Shop  Registration"} />
    ),
  },
  {
    path: "/create/spairShopRegistration",
    component: (
      <UseContainer activePage={<AddSpairpartShopReg />}   headerTitle={"Create Spair Parts Shop Registration"} />
    ),
  },
  {
    path: "/serviceStationRegistration",
    component: (
      <UseContainer activePage={<ServiceStaReg />}  buttons={[
        {
          content: "New",
          Path: "/create/serviceStationRegistration",
        },
      ]} headerTitle={"Service Station Registration"} />
    ),
  },
  {
    path: "/create/serviceStationRegistration",
    component: (
      <UseContainer activePage={<AddServiceStaReg />}   headerTitle={"Create Service Station Registration"} />
    ),
  },
  {
    path: "/hotelRegistration",
    component: (
      <UseContainer activePage={<HotelReg />}  buttons={[
        {
          content: "New",
          Path: "/create/hotelRegistration",
        },
      ]} headerTitle={"Hotel Registration"} />
    ),
  },
  {
    path: "/create/hotelRegistration",
    component: (
      <UseContainer activePage={<AddHotelReg />}   headerTitle={"Create Hotel Registration"} />
    ),
  },
  {
    path: "/labourRegistration",
    component: (
      <UseContainer activePage={<LaboursReg />}  buttons={[
        {
          content: "New",
          Path: "/create/labourRegistration",
        },
      ]} headerTitle={"Labours Registration"} />
    ),
  },
  {
    path: "/create/labourRegistration",
    component: (
      <UseContainer activePage={<AddLaboursReg />}   headerTitle={"Create Labours Registration"} />
    ),
  },
  {
    path: "/driverRegistration",
    component: (
      <UseContainer activePage={<DriverReg />}  buttons={[
        {
          content: "New",
          Path: "/create/driverRegistration",
        },
      ]} headerTitle={"Drivers Registration"} />
    ),
  },
  {
    path: "/create/driverRegistration",
    component: (
      <UseContainer activePage={<AddDriverReg />}   headerTitle={"Create Driver Registration"} />
    ),
  },
  {
    path: "/gudstransRegistration",
    component: (
      <UseContainer activePage={<GudsTransReg />}  buttons={[
        {
          content: "New",
          Path: "/create/gudstransRegistration",
        },
      ]} headerTitle={"Guds Transport Registration"} />
    ),
  },
  {
    path: "/create/gudstransRegistration",
    component: (
      <UseContainer activePage={<AddGudsReg />}   headerTitle={"Create Guds Transport Registration"} />
    ),
  },
  {
    path: "/trucksBookings",
    component: (
      <UseContainer activePage={<TrucksBookings />}  buttons={[
        {
          content: "New",
          Path: "/Add/trucksBookings",
        },
      ]} headerTitle={"Truck Booking"} />
    ),
  },
  {
    path: "/Add/trucksBookings",
    component: (
      <UseContainer activePage={<AddTrucksBookings />}   headerTitle={"Create "} />
    ),
  },
  {
    path: "/Booking",
    component: (
      <UseContainer activePage={<Booking />}  buttons={[
        {
          content: "New",
          Path: "/create/Booking",
        },
      ]} headerTitle={"Booking"} />
    ),
  },
  {
    path: "/create/Booking",
    component: (
      <UseContainer activePage={<AddBooking />}   headerTitle={"Create Booking"} />
    ),
  },
];
