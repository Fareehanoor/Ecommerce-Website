const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    let { id, color, amount, product } = action.payload;
    console.log("cartReducer::", id, color, amount, product);

    let cartProduct;
    cartProduct = {
      id: id + color,
      name: product.name,
      amount,
      color,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "remove_item") {
    let updatedCart = state.cart.filter(
      (currElem) => currElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "clear_cart") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default cartReducer;
