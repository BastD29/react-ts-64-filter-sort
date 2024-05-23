import { RowType } from "../models/row";

const rows: RowType[] = [
  {
    id: 1,
    name: "Liz Lemon",
    age: 36,
    is_manager: true,
    start_date: "02-28-1999",
  },
  {
    id: 2,
    name: "Jack Donaghy",
    age: 40,
    is_manager: true,
    start_date: "03-05-1997",
  },
  {
    id: 3,
    name: "Tracy Morgan",
    age: 39,
    is_manager: false,
    start_date: "07-12-2002",
  },
  {
    id: 4,
    name: "Jenna Maroney",
    age: 40,
    is_manager: false,
    start_date: "02-28-1998",
  },
  {
    id: 5,
    name: "Kenneth Parcell",
    age: Infinity,
    is_manager: false,
    start_date: "01-01-1970",
  },
  {
    id: 6,
    name: "Pete Hornberger",
    age: 42,
    is_manager: true,
    start_date: "04-01-2000",
  },
  {
    id: 7,
    name: "Frank Rossitano",
    age: 36,
    is_manager: false,
    start_date: "06-09-2004",
  },
];

export { rows };
