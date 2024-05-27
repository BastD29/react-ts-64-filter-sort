import SearchInput from "../SearchInput/SearchInput3";
import Table from "../Table/Table2";
import { useFilter } from "../../hooks/useFilter";
import { useSort } from "../../hooks/useSort";
import Dropdown from "../Dropdown/Dropdown";
import style from "./App.module.scss";

// * SAME COMPONENT AS APP 8 USING A REUSABLE CUSTOM DROPDOWN COMPONENT

const App: React.FC = () => {
  const { clearFilter, filters } = useFilter();
  const { clearSort } = useSort();

  return (
    <div className={style["app"]}>
      <SearchInput />
      <Dropdown
        label="Is manager"
        dataKey="is_manager"
        name="is_manager"
        value={filters.is_manager || ""}
      />
      <Dropdown
        label="Start date"
        dataKey="start_date"
        name="start_date"
        value={filters.start_date || ""}
      />
      <Table />
      <button className={style["app__button"]} onClick={clearFilter}>
        Clear filters
      </button>
      <button className={style["app__button"]} onClick={clearSort}>
        Clear sort
      </button>
    </div>
  );
};

export default App;
