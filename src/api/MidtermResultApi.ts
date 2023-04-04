import { apiClient } from "./apiClient";
import { type AxiosError } from "axios";

interface LastResultProps {
  liSeq: number;
  mbSeq: number;
  score: number;
}

export const setMidtermResult = async (
  liSeq,
  mbSeq,
  score,
): Promise<LastResultProps> => {
  const body = {
    masSeq: 1,
    mbSeq: mbSeq,
    score: score,
  };

  try {
    const res = await apiClient.post(
      `http://192.168.0.183:8520/api/sco/${liSeq}`,
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
