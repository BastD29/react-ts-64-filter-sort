import { ChangeEvent, useEffect, useMemo } from "react";
import { useDataContext } from "../../hooks/useDataContext";
import { useFilterContext } from "../../hooks/useFilterContext";
import { useSortContext } from "../../hooks/useSortContext";
import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_DATA,
  SET_FILTER,
  SET_SORT,
} from "../../constants/actions";
import { filterRows, sortRows } from "../../utils/utils4";
import { RowType } from "../../models/row";
import SearchInput from "../SearchInput/SearchInput2";
import Select from "../Select/Select";
import Table from "../Table/Table";
import { columns } from "../../data/columns";
import { rows } from "../../data/rows";
import style from "./App.module.scss";

// * THIS COMPONENT USES USECONTEXT AND USEREDUCER SO SINGLE RESPONSIBILITY IS RESPECTED

const App: React.FC = () => {
  const { state: data, dispatch: dataDispatch } = useDataContext();
  const { state: filters, dispatch: filterDispatch } = useFilterContext();
  const { state: sort, dispatch: sortDispatch } = useSortContext();

  useEffect(() => {
    dataDispatch({ type: SET_DATA, payload: rows });
  }, [dataDispatch]);

  const filteredRows = useMemo(
    () => filterRows(data, filters),
    [data, filters]
  );

  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    filterDispatch({ type: SET_FILTER, payload: { name, value } });
  };

  const handleSort = (key: keyof RowType) => {
    sortDispatch({ type: SET_SORT, payload: key });
  };

  const clearAll = () => {
    filterDispatch({ type: CLEAR_FILTER });
    sortDispatch({ type: CLEAR_SORT });
  };

  return (
    <div className={style["app"]}>
      <SearchInput onChange={handleFilter} value={filters.search || ""} />
      <Select onChange={handleFilter} />
      <Table
        columns={columns}
        rows={data}
        filteredRows={filteredRows}
        sortedRows={sortedRows}
        handleSort={handleSort}
      />
      <button className={style["app__button"]} onClick={clearAll}>
        Clear filters & sort
      </button>
    </div>
  );
};

export default App;
