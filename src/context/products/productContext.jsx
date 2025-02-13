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

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
//custom hook

export const useProductContext = () => {
  return useContext(AppContext);
};
