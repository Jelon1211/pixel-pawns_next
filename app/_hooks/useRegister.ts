import LoginService from "../_services/loginService";
import { ICreateUser } from "../_types/login";

const useRegister = () => {
  const handleRegisterUser = async (userData: ICreateUser) => {
    try {
      const result = await LoginService.createUser(userData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleRegisterUser };
};

export default useRegister;
