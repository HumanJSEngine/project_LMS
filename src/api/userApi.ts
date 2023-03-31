import { authClient } from "./authClient";
import { isAxiosError, type AxiosResponse } from "axios";
import { type UserType } from "../types/User";

interface LoginDataType {
  id: string;
  pwd: string;
}
interface LoginParams {
  id: string;
  pwd: string;
}

interface LoginResponse extends AxiosResponse {
  data: LoginResponseData;
}

interface LoginResponseData {
  status: true;
  seq: number;
  id: string;
  name: string;
  type: UserType;
  token: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
  };
}
interface LoginErrorData {
  status: false;
  message: string;
}

export const userLogin = async ({
  id,
  pwd,
}: LoginDataType): Promise<LoginResponseData | LoginErrorData> => {
  try {
    const params: LoginParams = {
      id,
      pwd,
    };
    const res: LoginResponse = await authClient.post("/login", params);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
    throw error;
  }
};
