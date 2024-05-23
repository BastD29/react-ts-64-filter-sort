import { ColumnType } from "../../models/column";
import { RowType } from "../../models/row";
import style from "./TableHead.module.scss";

type TableHeadProps = {
  columns: ColumnType[];
  handleSort: (key: keyof RowType) => void;
};

const TableHead: React.FC<TableHeadProps> = ({ columns, handleSort }) => {
  return (
    <thead className={style["thead"]}>
      <tr>
        {columns.map((column) => (
          <th key={column.label} onClick={() => handleSort(column.accessor)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
