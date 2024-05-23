import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { columns } from "../../data/columns";
import SearchInput from "../SearchInput/SearchInput2";
import Select from "../Select/Select";
import Table from "../Table/Table";
import { rows } from "../../data/rows";
import { FilterType } from "../../models/filter";
import { filterRows, sortRows } from "../../utils/utils4";
import { RowType } from "../../models/row";
import { SortType } from "../../models/sort";
import style from "./App.module.scss";

// * THIS COMPONENT SHOWS FILTER AND SORT WORKING TOGETHER

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterType>({});
  const [sort, setSort] = useState<SortType>({ order: "asc", orderBy: "id" });
  const [data, setData] = useState<RowType[]>(rows);

  useEffect(() => {
    setData(rows);
  }, []);

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
    console.log(`Filter: ${name} = ${value}`); // ex: `is_manager = true`, `search = l`

    const newFilters: FilterType = {
      ...filters,
      [name]: value,
    };

    console.log("newFilters:", newFilters); // ex: `{is_manager: 'true'}`, `{search: 'l'}`

    setFilters(newFilters);
  };

  const handleSort = (key: keyof RowType) => {
    setSort((prev) => ({
      order: prev.order === "asc" && prev.orderBy === key ? "desc" : "asc",
      orderBy: key,
    }));
  };

  const clearAll = () => {
    setSort({ order: "asc", orderBy: "id" });
    setFilters({});
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
