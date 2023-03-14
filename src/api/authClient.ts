import axios from "axios";

export const authClient = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default authClient;
