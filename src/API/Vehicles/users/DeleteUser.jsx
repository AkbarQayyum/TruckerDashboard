import axiosInstance from "../../Utils/AxiosInstance";

export const DeleteUser = async (obj) => {
  let snackbarData = {};
  try {
    let res = await axiosInstance.delete(`/users/auth/delete/${obj?.id}`);
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
