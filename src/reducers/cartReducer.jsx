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
  return state;
};

export default cartReducer;
