import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const instance = axios.create({
  baseURL: isProduction
    ? "https://centaraus-api.onrender.com/api"
    : "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

//add token to header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export default instance;
