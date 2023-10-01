import { FormEvent } from "react";
import LoginService from "../_services/loginService";

const useLogin = () => {
  const handleGetUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await LoginService.getUser("1");
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleGetUser };
};

export default useLogin;
