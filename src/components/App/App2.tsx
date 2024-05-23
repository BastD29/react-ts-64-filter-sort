import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { columns } from "../../data/columns";
import SearchInput from "../SearchInput/SearchInput2";
import Table from "../Table/Table";
import { rows } from "../../data/rows";
import { FilterType } from "../../models/filter";
import { filterRows } from "../../utils/utils2";
import { RowType } from "../../models/row";
import style from "./App.module.scss";

// * THIS APP COMPONENT IS MORE MAINTAINABLE AS IT USES SEARCH THROUGH FILTERS STATE

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

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Filter: ${name} = ${value}`);

    const newFilters: FilterType = {
      ...filters,
      [name]: value,
    };

    setFilters(newFilters);
  };

  return (
    <div className={style["app"]}>
      <SearchInput onChange={handleFilter} />
      <Table columns={columns} rows={data} filteredRows={filteredRows} />
    </div>
  );
};

export default App;
