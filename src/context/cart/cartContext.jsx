/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../../reducers/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "add_to_cart", payload: { id, color, amount, product } });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "remove_item", payload: id });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
