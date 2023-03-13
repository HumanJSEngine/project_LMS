import axios from "axios";

export const apiClient = (url: string, options: object) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};
