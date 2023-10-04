import { FormEvent } from "react";
import LoginService from "../_services/loginService";

const useLogin = () => {
  const handleRegisterUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await LoginService.createUser();
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleRegisterUser };
};

export default useLogin;
