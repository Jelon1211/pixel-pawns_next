import { FormEvent } from "react";
import LoginService from "../_services/loginService";
import { ILoginUser } from "../_types/login";

const useLogin = () => {
  const handleGetUser = async (
    e: FormEvent<HTMLFormElement>,
    userData: ILoginUser
  ) => {
    e.preventDefault();
    console.log(userData);
    try {
      const userData = await LoginService.getUser(userData);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleGetUser };
};

export default useLogin;
