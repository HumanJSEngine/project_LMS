import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
export const apiClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  config => {
    const user = JSON.parse(localStorage.getItem("user") ?? "");
    if (user?.token !== null) {
      config.headers.Authorization = `Bearer ${String(user.token)}`;
    }
    return config;
  },
  async error => await Promise.reject(error),
);
