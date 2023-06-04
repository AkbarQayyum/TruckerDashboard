import axiosInstance from "../../Utils/AxiosInstance";

export const ApproveUser = async (obj) => {
  let snackbarData = {};
  try {
    let res = await axiosInstance.get(`users/auth/verifyemail/${obj?.id}`);
    if (res.data.isSuccess) {
      snackbarData = {
        message: res?.data?.message,
        type: "success",
        openToast: true,
      };
    } else {
      snackbarData = {
        message: res?.data?.message,
        type: "error",
        openToast: true,
      };
    }
    return { ...res, snackbarData };
  } catch (error) {
    console.log(error);
  }
};
