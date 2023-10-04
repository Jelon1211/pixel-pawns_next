import { IButton } from "@/app/_types/login";

const SubmitButton = ({ placeHolderValue }: IButton) => {
  return <input type="submit" value={placeHolderValue} className="my-6" />;
};

export default SubmitButton;
