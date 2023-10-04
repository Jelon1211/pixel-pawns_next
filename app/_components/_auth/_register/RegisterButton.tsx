import { IButton } from "@/app/_types/login";

const SmallLink = ({ placeHolderValue }: IButton) => {
  return (
    <>
      <span className="underline underline-offset-1">{placeHolderValue}</span>
    </>
  );
};

export default SmallLink;
