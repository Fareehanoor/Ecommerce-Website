/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../../reducers/productReducer";

export const AppContext = createContext("");
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSinglePageLoading: false,
  singleProduct: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "loading" });
    try {
      const resposne = await axios.get(url);
      const products = await resposne.data;
      console.log("Products Resposne :: ", products);
      dispatch({ type: "api_data", payload: products });
    } catch (error) {
      dispatch({ type: "api_error" });
      console.log(error);
    }
  };
  // get single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "single_page_loading" });
    try {
      const resposne = await axios.get(url);
      const singleProduct = await resposne.data;
      dispatch({ type: "single_product", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "single_page_error" });
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hook

export const useProductContext = () => {
  return useContext(AppContext);
};
