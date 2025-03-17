/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../Products/productContext";
import reducer from "../../reducers/filterReducer";
const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  selected_sort_value: "lowest",
  search_filter: {
    text: "",
    category: "all",
    company: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "set_grid_view" });
  };
  const setListView = () => {
    return dispatch({ type: "set_list_view" });
  };

  const handleSorting = (event) => {
    const userSelectedvalue = event.target.value;
    return dispatch({ type: "get_sort_value", payload: userSelectedvalue });
  };

  const handleFilterUpdate = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "update_filter_value", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "filter_products" });
    dispatch({ type: "sorting_products" });
  }, [state.selected_sort_value, state.search_filter]);

  useEffect(() => {
    dispatch({ type: "load_filter_products", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSorting,
        handleFilterUpdate,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
