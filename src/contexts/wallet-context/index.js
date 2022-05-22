import React, { createContext, useContext, useReducer } from "react";
import actions from "./actions";
import reducer, { initialState } from "./reducer";

const WalletContext = createContext({});

export const Web3ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WalletContext.Provider value={{ ...actions(state, dispatch) }}>
      {children}
    </WalletContext.Provider>
  );
};

export const WalletUserContext = () => useContext(WalletContext);
