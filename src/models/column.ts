import { RowType } from "./row";

type ColumnType = {
  accessor: keyof RowType;
  label: string;
  format?: (value: any) => typeof value;
};

export type { ColumnType };
