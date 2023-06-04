import axiosInstance from "../../Utils/AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  vehicles: null,
  status: "idle", //pending success rejected
};

export const AllVehicleForSelling = createAsyncThunk("vehicle", async (obj) => {
  let res = await axiosInstance.get("/api/sell");
  return res.data?.data;
});

export const SellingVehicleSlice = createSlice({
  name: "SellingVehicleSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(AllVehicleForSelling.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(AllVehicleForSelling.fulfilled, (state, action) => {
        console.log(action.payload);
        state.vehicles = action.payload;
        state.status = "success";
      })
      .addCase(AllVehicleForSelling.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const GetSellingVehicles = (state) => state.SellingVehicleSlice;
export default SellingVehicleSlice.reducer;
