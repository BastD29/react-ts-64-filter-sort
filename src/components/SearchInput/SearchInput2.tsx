import { InputHTMLAttributes } from "react";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      name="search"
      type="search"
      placeholder="Search..."
      className={style["search-input"]}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default SearchInput;
