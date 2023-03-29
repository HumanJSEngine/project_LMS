import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
export const authClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default authClient;
