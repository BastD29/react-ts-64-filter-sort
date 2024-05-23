import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { columns } from "../../data/columns";
import SearchInput from "../SearchInput/SearchInput2";
import Select from "../Select/Select";
import Table from "../Table/Table";
import { rows } from "../../data/rows";
import { FilterType } from "../../models/filter";
import { filterRows } from "../../utils/utils3";
import { RowType } from "../../models/row";
import style from "./App.module.scss";

// * THIS COMPONENT ADDS SELECT COMPONENT TO SHOW HOW EXTENDABLE THE FILTER FUNCTIONALITY IS

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterType>({});
  const [data, setData] = useState<RowType[]>(rows);

  useEffect(() => {
    setData(rows);
  }, []);

  const filteredRows = useMemo(
    () => filterRows(data, filters),
    [data, filters]
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

  return (
    <div className={style["app"]}>
      <SearchInput onChange={handleFilter} />
      <Select onChange={handleFilter} />
      <Table columns={columns} rows={data} filteredRows={filteredRows} />
    </div>
  );
};

export default App;
