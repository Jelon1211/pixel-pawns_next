import { IButton } from "@/app/_types/login";

const SubmitButton = ({ placeHolderValue, isDisabled = false }: IButton) => {
  return (
    <input
      type="submit"
      value={placeHolderValue}
      className="my-6"
      disabled={isDisabled}
    />
  );
};

export default SubmitButton;
