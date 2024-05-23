import { ColumnType } from "../../models/column";
import { RowType } from "../../models/row";
import style from "./TableBody.module.scss";

type TableBodyProps = {
  rows: RowType[];
  columns: ColumnType[];
  filteredRows: RowType[];
  sortedRows: RowType[];
};

const TableBody: React.FC<TableBodyProps> = ({ columns, sortedRows }) => {
  return (
    <tbody className={style["tbody"]}>
      {/* {rows.map((row) => ( */}
      {/* {searchedRows.map((row) => ( */}
      {/* {filteredRows.map((row) => ( */}
      {sortedRows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.label}>
              {column.format
                ? column.format(row[column.accessor])
                : row[column.accessor]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
