import { ReactNode, useReducer } from "react";
import { RowsContext } from "./RowsContext";
import { initialRowsState, rowsReducer } from "../../reducers/rowsReducer";

type RowsProviderProps = {
  children: ReactNode;
};

export const RowsProvider: React.FC<RowsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rowsReducer, initialRowsState);

  return (
    <RowsContext.Provider value={{ state, dispatch }}>
      {children}
    </RowsContext.Provider>
  );
};
