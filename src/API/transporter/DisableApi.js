import axiosInstance from "../../Utils/AxiosInstance";

export const DisableAPI = async (obj) => {
  let snackbarData = {};
  try {
    let res = await axiosInstance.put("/api/transporter/", obj);
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
