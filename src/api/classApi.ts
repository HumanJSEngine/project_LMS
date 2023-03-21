import { apiClient } from "./apiClient";
import { type AxiosError } from "axios";

export const getStudentInClass = async (classId: number) => {
  try {
    const res = await apiClient.get(`/lec/${classId}`);
    const { data } = res;
    if (data === undefined) {
      return null;
    }
    return data;
  } catch (error) {
    const { response } = error as AxiosError;
    if (response !== null) {
      throw error;
    }
    throw error;
  }
};
