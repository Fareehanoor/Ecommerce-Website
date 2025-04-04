/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../../reducers/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localStorageCartData = localStorage.getItem("FareehaCart::");
  if (localStorageCartData == []) {
    return [];
  } else {
    return JSON.parse(localStorageCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
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
  const handleClearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const setDecrement = (id) => {
    dispatch({ type: "set_decrement", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "set_increment", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "cart_items_count" });
    dispatch({ type: "cart_total_price" });
    localStorage.setItem("FareehaCart::", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        handleRemoveItem,
        handleClearCart,
        setDecrement,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
