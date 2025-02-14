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
  if (action.type === "single_page_loading") {
    return {
      isSinglePageLoading: true,
      ...state,
    };
  }
  if (action.type === "single_product") {
    return {
      singleProduct: action.payload,
      isSinglePageLoading: false,
      ...state,
    };
  }
  if (action.type === "single_page_error") {
    return {
      isSinglePageLoading: false,
      isError: true,
      ...state,
    };
  }
  return state;
};
export default productReducer;
