import axios, { AxiosResponse } from "axios";
import { IGetUser, ICreateUser } from "../_types/login";

export default class LoginService {
  static async getUser(id: string): Promise<IGetUser> {
    try {
      const response: AxiosResponse<IGetUser> = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/users/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(
    userData: Partial<ICreateUser>
  ): Promise<ICreateUser> {
    try {
      const response: AxiosResponse<ICreateUser> = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/users`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
