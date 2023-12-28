import { useState } from "react";
import LoginService from "../_services/loginService";
import { ICreateUser } from "../_types/login";
import { AxiosError } from "axios";
import { ErrorResponse } from "../_types/login";

const useRegister = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegisterUser = async (userData: ICreateUser) => {
    setIsRegistering(true);
    try {
      const result = await LoginService.createUser(userData);
      console.log(result);
      
      if (result.message) {
        setIsRegistered(true);
        setErrorMessage("");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>; // Asercja typu dla AxiosError

      console.error(axiosError);
      setIsRegistered(false);

      const errorMessage =
        axiosError.response?.data?.message || "An error occurred";
      setErrorMessage(errorMessage);
    } finally {
      setIsRegistering(false);
    }
  };

  return { handleRegisterUser, isRegistering, isRegistered, errorMessage };
};

export default useRegister;
