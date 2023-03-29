import { apiClient } from "./apiClient";
import axios, { type AxiosError, type AxiosResponse } from "axios";
import { type finalScore, type IStudent } from "../types/Student";

export const getMyClass = async (proNum: number) => {
  try {
    const res = await apiClient.get(`/pro/${proNum}`);
    const { data } = res;
    if (data === undefined) {
      return null;
    }
    return data.list;
  } catch (error) {
    const { response } = error as AxiosError;
    if (response !== null) {
      throw error;
    }
    throw error;
  }
};

export const getStudentInClass = async (
  classId: number,
): Promise<IStudent[] | null> => {
  try {
    const res: AxiosResponse = await apiClient.get(`/lec/${classId}`);
    if (res.data === undefined) {
      return null;
    }
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

interface StudentGradeResponse extends AxiosResponse {
  data: {
    status: true;
    message: string;
    data: StudentGradeData;
  };
}

export interface StudentGradeData {
  stuId: string;
  stuName: string;
  stuGrade: number;
  stuSubject: string;
  finalScore: finalScore;
  lectureStudentCateListScoreVO: ScoreItem[];
  lectureStudentAttendVO: AttendItem[];
}
export interface ScoreItem {
  scoreCateSeq: number;
  scoreCateName: string;
  score: number;
  maxScore: number;
}
export interface AttendItem {
  attendCount: number;
  attendCountTotal: number;
}
export const getStudentGrade = async (
  classSeq: number,
  memberSeq: number,
): Promise<StudentGradeData> => {
  try {
    const res: StudentGradeResponse = await apiClient.get(
      `/lec/${classSeq}/${memberSeq}`,
    );
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data.message;
    }
    throw error;
  }
};

export const setStudentGrade = async (
  classSeq: number,
  memberSeq: number,
  scoreCateSeq: number,
  cateStuScore: number,
) => {
  try {
    const params = {
      scoreCateSeq,
      cateStuScore,
    };
    const res = await apiClient.put(`/lec/${classSeq}/${memberSeq}`, params);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data.message;
    }
    throw error;
  }
};
