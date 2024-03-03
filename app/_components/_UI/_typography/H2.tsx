import { IH2 } from "@/app/_types/components";

const H2: React.FC<IH2> = ({ className, text }) => (
  <h2 className={className}>{text}</h2>
);

export default H2;
