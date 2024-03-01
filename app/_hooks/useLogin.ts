import { FormEvent, useState } from "react";
import LoginService from "../_services/loginService";
import { ILoginUser } from "../_types/login";

const useLogin = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAuth = async (
    e: FormEvent<HTMLFormElement>,
    userData: ILoginUser
  ) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    setError(null);
    try {
      const bearerToken = await LoginService.loginAuth(userData);
      document.cookie = `bearerToken=${bearerToken.accessToken}; max-age=1800; path=/`;
    } catch (error) {
      setError(
        "Oops something wrong. I know what, but I won't tell you :) Try again!"
      );
    } finally {
      setIsLoading(false);
    }
  };

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

  return { handleGetUser, handleAuth, error, isLoading };
};

export default useLogin;
