import axios, { AxiosResponse } from "axios";
import { User } from "../_types/login";

export default class LoginService {
  static async getUser(id: string): Promise<User> {
    try {
      const response: AxiosResponse<User> = await axios.get(
        `${process.env.SERVER_ADRESS}/api/user/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(userData: Partial<User>): Promise<User> {
    try {
      const response: AxiosResponse<User> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
