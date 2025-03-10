/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../Products/productContext";
import reducer from "../../reducers/filterReducer";
const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "load_filter_products", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
