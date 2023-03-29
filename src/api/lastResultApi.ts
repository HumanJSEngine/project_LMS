import { apiClient } from "./apiClient";
import { type AxiosError } from "axios";

interface LastResultProps {
  lecture: string;
  studentCode: string;
  choiceValue: string;
}

export const setLastResult = async (
  lecture: string,
  studentCode: string,
  choiceValue: string,
): Promise<LastResultProps> => {
  const body = {
    studentCode,
    grade: choiceValue,
  };

  try {
    const res = await apiClient.post(
      `http://192.168.0.183:8520/api/final/${lecture}`,
      body,
    );
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
