import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/backend",
});

export default axiosClient;