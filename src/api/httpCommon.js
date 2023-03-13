import axios from "axios";
import url from "./baseUrl";
export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
