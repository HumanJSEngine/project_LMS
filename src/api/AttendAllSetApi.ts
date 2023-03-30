import { apiClient } from "./apiClient";
import { type AxiosError } from "axios";

interface LastResultProps {
  liSeq: number;
  mbSeq: number;
  amasSeq: number;
  status: string;
}

export const setAttendAllResult = async (
  liSeq,
  amasSeq,
  status,
): Promise<LastResultProps> => {
  const body = {
    amasSeq: amasSeq,
    status: status,
  };

  try {
    const res = await apiClient.post(
      `http://192.168.0.183:8520/api/atd/${liSeq}`,
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
