import { rows } from "./rows";

const options = {
  name: rows.map((row) => ({ value: row.name, label: row.name })),
  is_manager: [
    { value: "true", label: "Manager" },
    { value: "false", label: "Non-Manager" },
  ],
  // other options...
};

export { options };
