import { IInputField } from "@/app/_types/login";

const InputField: React.FC<IInputField> = ({
  name,
  type = "text",
  value,
  onChange,
  divClassName = " ",
  inputClassName = " ",
  labelClassName = " ",
}) => (
  <div className={divClassName}>
    <input
      className={`${value ? "has-value" : ""} ${inputClassName}`}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={name} className={labelClassName}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
  </div>
);

export default InputField;
