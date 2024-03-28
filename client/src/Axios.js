import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:82/",
});

export default axiosInstance;
