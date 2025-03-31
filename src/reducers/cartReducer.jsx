const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    let { id, color, amount, product } = action.payload;
    console.log("cartReducer::", id, color, amount, product);

    let existingProduct = state.cart.find(
      (currItem) => currItem.id == id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id == id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
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

  if (action.type === "set_decrement") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let decAmount = currElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }

        console.log(decAmount);
        return {
          ...currElem,
          amount: decAmount,
        };
      } else {
        return currElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "set_increment") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let incrAmount = currElem.amount + 1;
        if (incrAmount >= currElem.max) {
          incrAmount = currElem.max;
        }

        console.log(incrAmount);
        return {
          ...currElem,
          amount: incrAmount,
        };
      } else {
        return currElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "cart_items_count") {
    let updatedValue = state.cart.reduce((initailVal, currElem) => {
      let { amount } = currElem;
      initailVal = initailVal + amount;
      return initailVal;
    }, 0);
    return {
      ...state,
      total_item: updatedValue,
    };
  }
  return state;
};

export default cartReducer;
