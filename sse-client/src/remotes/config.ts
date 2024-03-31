import Axios from "axios";
import { BASE_ENDPOINT_URL } from "../constant/api";

const axios = Axios.create({
  baseURL: BASE_ENDPOINT_URL,
});

export default axios;
