const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    let { id, color, amount, product } = action.payload;
    console.log("cartReducer::::::::::", id, color, amount, product);
  }
  return state;
};

export default cartReducer;
