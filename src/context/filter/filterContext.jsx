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
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
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

    if (name === "price") {
      value = Number(value); // Ensure price is a number
    }

    console.log("handleFilterUpdate Triggered:", name, value); // Debugging log

    dispatch({ type: "update_filter_value", payload: { name, value } });
  };

  const handleClearFilter = () => {
    dispatch({ type: "clear_filter" });
  };

  useEffect(() => {
    dispatch({ type: "filter_products" });
    dispatch({ type: "sorting_products" });
  }, [state.selected_sort_value, state.filters]);

  useEffect(() => {
    if (products.length > 0) {
      console.log("Products Loaded:", products);
      dispatch({ type: "load_filter_products", payload: products });
    } else {
      console.warn("No products available when loading filter products.");
    }
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSorting,
        handleFilterUpdate,
        handleClearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
