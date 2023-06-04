import axiosInstance from "../../Utils/AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  Drivers: null,
  status: "idle", //pending success rejected
};

export const GetAttendance = createAsyncThunk("atte", async (obj) => {
  let res = await axiosInstance.get("/api/drivers/attendance");
  return res.data.data;
});

export const DriverAttendanceSlice = createSlice({
  name: "driverSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetAttendance.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetAttendance.fulfilled, (state, action) => {
        console.log(action.payload);
        state.Drivers = action.payload;
        state.status = "success";
      })
      .addCase(GetAttendance.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const GetAllDriverAttendance = (state) => state.driverSlice;
export default DriverAttendanceSlice.reducer;
