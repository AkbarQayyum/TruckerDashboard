import axiosInstance from "../../Utils/AxiosInstance";
import Cookies from "universal-cookie";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const cookies = new Cookies();
const initialState = {
  isLogin: false,
  user: null,
  message: {},
  status: "idle", //pending success rejected
};

export const UserLogin = createAsyncThunk("userlogin", async (obj) => {
  let res = await axiosInstance.post("/users/auth/login", obj);
  console.log(res.data);
  await cookies.set("access_token", res.data.token);
  await cookies.set("user", res.data.user);
  return res.data;
});

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    logout: (state, action) => {
      console.log("he");
      state.isLogin = false;
      state.user = null;
      state.message = {};
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserLogin.pending, (state, action) => {
        state.user = {};
        state.status = "pending";
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload.user;
        state.status = "success";
        state.message = {
          type: "success",
          message: action.payload.message,
          openToast: true,
        };
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const getUserData = (state) => state.LoginSlice;
export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
