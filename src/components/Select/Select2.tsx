import { SelectHTMLAttributes } from "react";
import style from "./Select.module.scss";
import { OptionType } from "../../models/option";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionType[];
  name: string;
};

const Select: React.FC<SelectProps> = ({
  onChange,
  name,
  options,
  ...props
}) => {
  return (
    <select
      className={style["select"]}
      name={name}
      onChange={onChange}
      {...props}
    >
      {/* <option value="">All names</option>
      <option value="Liz Lemon">Liz Lemon</option>
      <option value="Jack Donaghy">Jack Donaghy</option>
      <option value="Tracy Morgan">Tracy Morgan</option>
      <option value="Jenna Maroney">Jenna Maroney</option>
      <option value="Kenneth Parcell">Kenneth Parcell</option>
      <option value="Pete Hornberger">Pete Hornberger</option>
      <option value="Frank Rossitano">Frank Rossitano</option> */}
      <option value="">All</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
