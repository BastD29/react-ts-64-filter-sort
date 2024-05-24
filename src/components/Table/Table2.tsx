import TableBody from "../TableBody/TableBody2";
import TableHead from "../TableHead/TableHead2";
import style from "./Table.module.scss";

const Table: React.FC = () => {
  return (
    <table className={style["table"]}>
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
