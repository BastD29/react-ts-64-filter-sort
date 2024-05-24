import { ChangeEvent, useEffect, useMemo } from "react";
import { useRowsContext } from "../../hooks/useRowsContext";
import { useFilterContext } from "../../hooks/useFilterContext";
import { useSortContext } from "../../hooks/useSortContext";
import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_ROWS,
  SET_FILTER,
  SET_SORT,
} from "../../constants/actions";
import { filterRows, sortRows } from "../../utils/utils4";
import { RowType } from "../../models/row";
import SearchInput from "../SearchInput/SearchInput2";
import Select from "../Select/Select";
import Table from "../Table/Table";
import { columns } from "../../data/columns";
import style from "./App.module.scss";

// * THIS COMPONENT USES USECONTEXT AND USEREDUCER BUT STILL USES PROPS DRILLING SO SINGLE RESPONSIBILITY PRINCIPLE IS NOT RESPECTED

const App: React.FC = () => {
  const { state: rows, dispatch: rowsDispatch } = useRowsContext();
  const { state: filters, dispatch: filterDispatch } = useFilterContext();
  const { state: sort, dispatch: sortDispatch } = useSortContext();

  useEffect(() => {
    rowsDispatch({ type: SET_ROWS, payload: rows });
  }, [rowsDispatch]);

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
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
        rows={rows}
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
