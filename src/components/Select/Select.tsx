import { SelectHTMLAttributes } from "react";
import style from "./Select.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <select className={style["select"]} name="is_manager" onChange={onChange}>
      <option value="">All</option>
      <option value="true">Is manager</option>
      <option value="false">Is not manager</option>
    </select>
  );
};

export default Select;
