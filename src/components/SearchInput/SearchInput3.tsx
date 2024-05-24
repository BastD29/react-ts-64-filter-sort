import { InputHTMLAttributes } from "react";
import { useFilter } from "../../hooks/useFilter";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  // onChange,
  ...rest
}) => {
  const { handleFilter, filters } = useFilter();

  return (
    <input
      name="search"
      type="search"
      placeholder="Search..."
      className={style["search-input"]}
      // value={value}
      value={filters.search || ""}
      // onChange={onChange}
      onChange={handleFilter}
      {...rest}
    />
  );
};

export default SearchInput;
