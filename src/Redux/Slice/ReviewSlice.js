import axiosInstance from "../../Utils/AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  reviews: null,
  status: "idle", //pending success rejected
};

export const GetReviews = createAsyncThunk("register", async (obj) => {
  let res = await axiosInstance.get("/api/reviews");
  return res.data?.data;
});

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetReviews.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetReviews.fulfilled, (state, action) => {
        console.log(action.payload);
        state.reviews = action.payload;
        state.status = "success";
      })
      .addCase(GetReviews.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const GetAllReviews = (state) => state.ReviewSlice;
export default ReviewSlice.reducer;
