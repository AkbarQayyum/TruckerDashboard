import axiosInstance from "../../Utils/AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  transporters: null,
  status: "idle", //pending success rejected
};

export const GetTransporters = createAsyncThunk("register", async (obj) => {
  let res = await axiosInstance.get("/api/transporter");
  return res.data?.data;
});

export const TransporterSlice = createSlice({
  name: "TransporterSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetTransporters.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetTransporters.fulfilled, (state, action) => {
        console.log(action.payload);
        state.transporters = action.payload;
        state.status = "success";
      })
      .addCase(GetTransporters.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const getAllTransporters = (state) => state.TransporterSlice;
export default TransporterSlice.reducer;
