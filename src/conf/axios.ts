import axios from "axios";

export const InstanceAxiosUrl = axios.create({
  baseURL: "http://localhost:8080",
});
