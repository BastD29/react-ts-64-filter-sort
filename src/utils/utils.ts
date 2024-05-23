import { RowType } from "../models/row";

function isNull(value: any) {
  return typeof value === "undefined" || value === null;
}

// * if you want to filter regardless of key of RowType
// function searchRows(rows: RowType[], searchTerm: string) {
//   if (isNull(searchTerm)) return rows;

//   return rows.filter((row) =>
//     Object.keys(row).some(
//       (key) =>
//         typeof row[key as keyof RowType] === "string" &&
//         (row[key as keyof RowType] as string)
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//     )
//   );
// }

// * if you want to filter by choosing key of RowType
function searchRows(
  rows: RowType[],
  searchTerm: string,
  keys: (keyof RowType)[]
) {
  if (isNull(searchTerm)) return rows;

  return rows.filter((row) =>
    keys.some(
      (key) =>
        typeof row[key] === "string" &&
        (row[key] as string).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}

export { searchRows };
