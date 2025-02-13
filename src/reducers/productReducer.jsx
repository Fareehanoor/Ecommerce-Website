const productReducer = (state, action) => {
  if (action.type === "loading") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "api_error") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  if (action.type === "api_data") {
    const featureData = action.payload.filter((currElement) => {
      return currElement.featured === true;
    });
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: action.payload,
      featuredProducts: featureData,
    };
  }
  return state;
};
export default productReducer;
