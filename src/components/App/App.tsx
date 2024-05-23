// import { useMemo, useState } from "react";
// import { columns } from "../../data/columns";
// import SearchInput from "../SearchInput/SearchInput";
// import Table from "../Table/Table";
// import { searchRows } from "../../utils/utils";
// import { rows } from "../../data/rows";
// import style from "./App.module.scss";
// import { RowType } from "../../models/row";

// // * THIS APP COMPONENT SHOWS AN EXAMPLE OF USING SEARCH ONLY

// const App: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const searchKeys: (keyof RowType)[] = ["name", "start_date"]; // choose which keys you want to search through

//   // const searchedRows = useMemo(
//   //   () => searchRows(rows, searchTerm),
//   //   [rows, searchTerm]
//   // );

//   const searchedRows = useMemo(
//     () => searchRows(rows, searchTerm, searchKeys),
//     [rows, searchTerm, searchKeys]
//   );

//   return (
//     <div className={style["app"]}>
//       <SearchInput
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <Table columns={columns} rows={rows} searchedRows={searchedRows} />
//     </div>
//   );
// };

// export default App;
