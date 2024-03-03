import { FormEvent, useState } from "react";
import LoginService from "../_services/loginService";
import { ILoginUser } from "../_types/login";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

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
      document.cookie = `bearerToken=${bearerToken.accessToken}; max-age=1800; path=/; Secure`;
    } catch (error) {
      setError(
        "Oops something wrong. I know what, but I won't tell you :) Try again!"
      );
    } finally {
      router.push("/game/dashboard");
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
