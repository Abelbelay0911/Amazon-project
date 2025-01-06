import { createContext, useReducer } from "react";
// import { reducer } from "../../Utility/Reducer";
export const dataContext = createContext()


export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <dataContext.Provider value={useReducer(reducer, initialState)}>
    
      {children}
    </dataContext.Provider>
  );
};
 

export default DataProvider;
