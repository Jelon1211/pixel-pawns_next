import axios, { AxiosResponse } from "axios";
import { IGetUser, ICreateUser } from "../_types/login";

export default class LoginService {
  static async getUser(id: string): Promise<IGetUser> {
    try {
      const response: AxiosResponse<IGetUser> = await axios.get(
        `${process.env.SERVER_ADRESS}/api/user/${id}`
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
      const response: AxiosResponse<ICreateUser> = await `axios`.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
