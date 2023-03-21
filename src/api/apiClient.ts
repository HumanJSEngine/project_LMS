import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
export const apiClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
