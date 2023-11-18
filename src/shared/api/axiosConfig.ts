import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: "/api/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

const initialize = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);
  return axiosInstance;
};

export default initialize;
