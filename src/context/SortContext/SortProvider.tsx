import { ReactNode, useReducer } from "react";
import { SortContext } from "./SortContext";
import { initialSortState, sortReducer } from "../../reducers/sortReducer";

type SortProviderProps = {
  children: ReactNode;
};

export const SortProvider: React.FC<SortProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(sortReducer, initialSortState);

  return (
    <SortContext.Provider value={{ state, dispatch }}>
      {children}
    </SortContext.Provider>
  );
};
