import axiosInstance from "../../Utils/AxiosInstance";

export const DeleteVehicle = async (obj) => {
  let snackbarData = {};
  try {
    let res = await axiosInstance.delete(`/api/sell/delete/${obj?.id}`);
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
