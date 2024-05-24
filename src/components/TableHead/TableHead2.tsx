import { columns } from "../../data/columns";
import { useSort } from "../../hooks/useSort";
import style from "./TableHead.module.scss";

const TableHead: React.FC = () => {
  const { handleSort } = useSort();

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
