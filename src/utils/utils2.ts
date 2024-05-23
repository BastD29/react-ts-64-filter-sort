import { FilterType } from "../models/filter";
import { RowType } from "../models/row";

function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

function isString(value: any): boolean {
  return typeof value === "string" || value instanceof String;
}

function isBoolean(value: any): boolean {
  return value === true || value === false;
}

function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

function toLower(value: string): string {
  if (isString(value)) {
    return value.toLowerCase();
  }

  return value;
}

function filterRows(rows: RowType[], filters: FilterType) {
  if (isEmpty(filters)) return rows;

  console.log("Filters: ", filters); // ex: `{is_manager: 'true'}`, `{search: 'l'}`

  return rows.filter((row) => {
    console.log("row:", row); // ex: `{id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999'}`

    return Object.keys(filters).every((key) => {
      console.log("key:", key); // ex: `is_manager`, `search`

      const filterValue = filters[key];
      console.log("filterValue:", filterValue); // ex: `true`, `l`

      return Object.keys(row).some((key) => {
        const value = row[key as keyof RowType];
        console.log("value:", value); // ex: `36`

        if (isString(value)) {
          return toLower(value as string).includes(
            toLower(filterValue as string)
          );
        }

        if (isBoolean(value)) {
          return (
            (filterValue === "true" && value) ||
            (filterValue === "false" && !value)
          );
        }

        if (isNumber(value)) {
          return value == filterValue;
        }

        return false;
      });
    });
  });
}

export { filterRows };
