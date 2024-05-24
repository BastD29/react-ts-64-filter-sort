import { columns } from "../../data/columns";
import { useRows } from "../../hooks/useRows";
import style from "./TableBody.module.scss";

const TableBody: React.FC = () => {
  const { sortedRows } = useRows();

  return (
    <tbody className={style["tbody"]}>
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
