import axios from "axios";
import { User } from "../_types/login";

export default class LoginService {
  static async getUser(id: string): Promise<User> {
    try {
      const response = await axios.get(
        `${process.env.SERVER_ADRESS}/api/user/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
