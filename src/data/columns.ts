import { ColumnType } from "../models/column";

const columns: ColumnType[] = [
  { accessor: "name", label: "Name" },
  { accessor: "age", label: "Age" },
  {
    accessor: "is_manager",
    label: "Manager",
    format: (value) => (value ? "✔️" : "✖️"),
  },
  { accessor: "start_date", label: "Start Date" },
];

export { columns };
