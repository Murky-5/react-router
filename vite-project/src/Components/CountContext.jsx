import { createContext, useContext, useState } from "react";
import List from "../Arrays/List";

const DataContext = createContext();

const DigDataContext = ({ children }) => {
  const [jet, setjet] = useState(List);

  return (
    <DataContext.Provider value={{ jet, setjet }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DigDataContext, useDataContext };
