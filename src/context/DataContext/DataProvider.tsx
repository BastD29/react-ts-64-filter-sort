import { ReactNode, useReducer } from "react";
import { DataContext } from "./DataContext";
import { dataReducer, initialDataState } from "../../reducers/dataReducer";

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
