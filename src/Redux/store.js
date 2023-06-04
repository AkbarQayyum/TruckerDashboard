import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";
import UserSlice from "./Slice/UserSlice";
import SellingVehicleSlice from "./Slice/SellingVehicleSlice";
import ReviewSlice from "./Slice/ReviewSlice";
import  DriverAttendanceSlice  from "./Slice/DriverAttendaceSlice";

export const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice,
    UserSlice: UserSlice,
    SellingVehicleSlice: SellingVehicleSlice,
    ReviewSlice: ReviewSlice,
    driverSlice: DriverAttendanceSlice,
  },
});
