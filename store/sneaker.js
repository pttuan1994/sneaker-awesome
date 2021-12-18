import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const initialState = {
  error: false,
  loading: false,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setError":
      return { ...state, error: action.payload };
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setProducts":
      return { ...state, products: action.payload };
    default:
      state;
  }
};

const SneakerContext = createContext({});

const SneakerStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "setLoading", payload: true });
    fetch("/catalog.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(({ data, pagination }) => {
        dispatch({ type: "setProducts", payload: data });
        dispatch({ type: "setLoading", payload: false });
      })
      .catch((error) => {
        dispatch({ type: "setLoading", payload: false });
        dispatch({ type: "setError", payload: error });
      });
  }, []);

  const sortName = (reverse) => {
    const result = state.products.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return reverse ? 1 : -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return reverse ? -1 : 1;
      }
      return 0;
    });
    dispatch({ type: "setProducts", payload: result });
  };

  const sortRank = (reverse) => {
    const result = state.products.sort((a, b) => {
      if (a.rank < b.rank) {
        return reverse ? 1 : -1;
      }
      if (a.rank > b.rank) {
        return reverse ? -1 : 1;
      }
      return 0;
    });
    dispatch({ type: "setProducts", payload: result });
  };

  return (
    <SneakerContext.Provider
      value={{
        ...state,
        sortName,
        sortRank,
      }}
    >
      {children}
    </SneakerContext.Provider>
  );
};

export const useSneaker = () => useContext(SneakerContext);

export default SneakerStore;
