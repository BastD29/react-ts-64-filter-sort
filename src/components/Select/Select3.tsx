import { SelectHTMLAttributes } from "react";
import { useFilter } from "../../hooks/useFilter";
import style from "./Select.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({ value, /* onChange, */ ...rest }) => {
  const { handleFilter, filters } = useFilter();

  return (
    <select
      className={style["select"]}
      name="is_manager"
      // value={value}
      value={filters.is_manager || ""}
      // onChange={onChange}
      onChange={handleFilter}
      {...rest}
    >
      <option value="">All</option>
      <option value="true">Is manager</option>
      <option value="false">Is not manager</option>
    </select>
  );
};

export default Select;
