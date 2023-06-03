import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

let type = "live";
const BaseUrl =
  type === "live"
    ? // "https://132c-2407-d000-403-103-d08-af6a-dbfc-25a1.ap.ngrok.io/api"
      "https://average-cape-toad.cyclic.app/"
    : type === "local"
    ? "https://localhost:4433/"
    : "https://localhost:4433/";
const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("access_token")}`,
  },
});

// some way of changing it
// export const setToken = (newLocale) => {
//   token = newLocale;
// };

// register a synchronous request interceptor
axiosInstance.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${cookies.get("access_token")}`,
    },
  }),
  null,
  { synchronous: true }
);

export default axiosInstance;
