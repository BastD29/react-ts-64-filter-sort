import { ColumnType } from "../../models/column";
import { RowType } from "../../models/row";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import style from "./Table.module.scss";

type TableProps = {
  columns: ColumnType[];
  rows: RowType[];
  filteredRows: RowType[];
  sortedRows: RowType[];
  handleSort: (key: keyof RowType) => void;
};

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  filteredRows,
  sortedRows,
  handleSort,
}) => {
  return (
    <table className={style["table"]}>
      <TableHead columns={columns} handleSort={handleSort} />
      <TableBody
        rows={rows}
        columns={columns}
        filteredRows={filteredRows}
        sortedRows={sortedRows}
      />
    </table>
  );
};

export default Table;
