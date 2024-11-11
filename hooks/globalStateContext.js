// GlobalStateContext.js
import React, {createContext, useState, useContext} from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <GlobalStateContext.Provider value={{isSelected, setIsSelected}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
