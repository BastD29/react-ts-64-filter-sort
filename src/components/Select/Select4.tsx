import { SelectHTMLAttributes } from "react";
import { useFilter } from "../../hooks/useFilter";
import { RowType } from "../../models/row";
import { OptionType } from "../../models/option";
import { rows } from "../../data/rows";
import style from "./Select.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  dataKey: keyof RowType;
  label: string;
};

const getUniqueOptions = (arr: RowType[], key: keyof RowType) => {
  return Array.from(new Set(arr.map((item) => String(item[key]))));
};

const formatLabel = (value: string) =>
  value.replace(/-/g, " ").charAt(0).toUpperCase() +
  value.replace(/-/g, " ").slice(1);

const Select: React.FC<SelectProps> = ({
  value,
  label,
  dataKey,
  name,
  ...rest
}) => {
  const { handleFilter } = useFilter();

  const options: OptionType[] = getUniqueOptions(rows, dataKey).map(
    (value) => ({
      value,
      // label
      label: formatLabel(value),
    })
  );

  return (
    <select
      className={style["select"]}
      name={name}
      value={value}
      onChange={handleFilter}
      {...rest}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
