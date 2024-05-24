import { ReactNode, useReducer } from "react";
import {
  columnsReducer,
  initialColumnsState,
} from "../../reducers/columnsReducer";
import { ColumnsContext } from "./ColumnsContext";

type ColumnsProviderProps = {
  children: ReactNode;
};

export const ColumnsProvider: React.FC<ColumnsProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(columnsReducer, initialColumnsState);

  return (
    <ColumnsContext.Provider value={{ state, dispatch }}>
      {children}
    </ColumnsContext.Provider>
  );
};
