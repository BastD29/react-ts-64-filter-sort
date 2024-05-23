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

function filterByValue(value: any, filterValue: any): boolean {
  if (isString(value)) {
    return toLower(value).includes(toLower(filterValue));
  }

  if (isBoolean(value)) {
    return (
      (filterValue === "true" && value) || (filterValue === "false" && !value)
    );
  }

  if (isNumber(value)) {
    return value == filterValue;
  }

  return false;
}

function filterRows(rows: RowType[], filters: FilterType): RowType[] {
  if (isEmpty(filters)) return rows;

  return rows.filter((row) =>
    Object.keys(filters).every((filterKey) => {
      const filterValue = filters[filterKey];

      return Object.keys(row).some((rowKey) =>
        filterByValue(row[rowKey as keyof RowType], filterValue)
      );
    })
  );
}

export { filterRows };
