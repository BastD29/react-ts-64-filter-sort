import SearchInput from "../SearchInput/SearchInput3";
import Select from "../Select/Select4";
import Table from "../Table/Table2";
import { useFilter } from "../../hooks/useFilter";
import { useSort } from "../../hooks/useSort";
import style from "./App.module.scss";

// * THIS COMPONENT USES USECONTEXT, USEREDUCER, AND CUSTOM HOOKS TO AVOID PROPS DRILLING SO SINGLE RESPONSIBILITY PRINCIPLE IS RESPECTED

const App: React.FC = () => {
  const { clearFilter, filters } = useFilter();
  const { clearSort } = useSort();

  return (
    <div className={style["app"]}>
      <SearchInput />
      <Select
        value={filters.is_manager || ""}
        name="is_manager"
        label="Is manager"
        dataKey="is_manager"
      />
      <Select
        value={filters.start_date || ""}
        name="start_date"
        label="Start date"
        dataKey="start_date"
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
