import React, { createContext } from "react";
import SneakerStore from "./sneaker";

const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{}}>
      <SneakerStore>{children}</SneakerStore>
    </StoreContext.Provider>
  );
};

export default StoreProvider;
