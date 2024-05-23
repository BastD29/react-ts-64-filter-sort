// import { ChangeEvent, useEffect, useMemo, useState } from "react";
// import { columns } from "../../data/columns";
// import SearchInput from "../SearchInput/SearchInput2";
// import Select from "../Select/Select2";
// import Table from "../Table/Table";
// import { rows } from "../../data/rows";
// import { FilterType } from "../../models/filter";
// import { filterRows } from "../../utils/utils2";
// import { RowType } from "../../models/row";
// import { options } from "../../data/options";
// import style from "./App.module.scss";

// // * THIS COMPONENT USES A REUSABLE SELECT COMPONENT, USING AN OBJECT OF OPTIONS DIRECTLY COMING FROM ROWS DATA

// const App: React.FC = () => {
//   const [filters, setFilters] = useState<FilterType>({});
//   const [data, setData] = useState<RowType[]>(rows);

//   useEffect(() => {
//     setData(rows);
//   }, []);

//   const filteredRows = useMemo(
//     () => filterRows(data, filters),
//     [data, filters]
//   );

//   const handleFilter = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     console.log(`Filter: ${name} = ${value}`);

//     const newFilters: FilterType = {
//       ...filters,
//       [name]: value,
//     };

//     setFilters(newFilters);
//   };

//   return (
//     <div className={style["app"]}>
//       <SearchInput onChange={handleFilter} />

//       {Object.keys(options).map((option) => (
//         <Select
//           key={option}
//           name={option}
//           options={options[option as keyof typeof options]}
//           onChange={handleFilter}
//         />
//       ))}
//       <Table columns={columns} rows={data} filteredRows={filteredRows} />
//     </div>
//   );
// };

// export default App;
