import axios from "axios";
import { getAccessToken } from "./session"
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 423,
  validationError: 400,
  emailNotVerified: 403,
};
const $axios = axios.create({
  baseURL: `https://apiURL`,
  timeout: 30000,
  headers: {
    'Authorization': 'Basic cmNjOnJjY0AxMjM=',
    // 'api_key': '1234',
    // 'device_type': "3",
    // 'offset': 21,
    // 'device_id': "string",
    // "device_token": "string",
    'Content-Type': 'application/json'
  },
});
const $axios1 = axios.create({
  responseType: "blob",
  baseURL: `https://apiURL`,
  timeout: 30000,
  headers: {
    deviceType: "3",
    offset: "5:30",
    api_key: `1234`,
  },
});

const $axios2 = axios.create({
  baseURL: `https://apiURL`,
  timeout: 30000,
  headers: {
    withCredentials: true,
    crossDomain: true,
    'Authorization': 'Basic cmNjOnJjY0AxMjM=',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

$axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
$axios1.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

$axios2.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const constants = {
  api_error_code,
  axios: $axios,
  axios1: $axios1,
  axios2: $axios2,
  getAccessToken,
  apiUrl: `https://apiURL`,
};
export default constants;
