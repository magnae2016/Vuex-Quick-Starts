import axios, { AxiosInstance } from "axios";

const APP_BASE_URI = "https://dummyjson.com";

function create(url: string, options = {}): AxiosInstance {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

export const dummyjson = create(APP_BASE_URI, {
  timeout: 1000
});