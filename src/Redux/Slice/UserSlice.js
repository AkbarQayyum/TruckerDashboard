import axiosInstance from "../../Utils/AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  status: "idle", //pending success rejected
};

export const allRegisterUsers = createAsyncThunk("register", async (obj) => {
  let res = await axiosInstance.get("/users/auth/");
  return res.data;
});



export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allRegisterUsers.pending, (state, action) => {
      
        state.status = "pending";
      })
      .addCase(allRegisterUsers.fulfilled, (state, action) => {
       console.log(action.payload)
        state.user = action.payload;
        state.status = "success";
      })
      .addCase(allRegisterUsers.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const getRegisterUsers = (state) => state.UserSlice;
export default UserSlice.reducer;
