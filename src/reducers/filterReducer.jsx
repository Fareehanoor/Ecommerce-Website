const filterReducer = (state, action) => {
  if (action.type === "load_filter_products") {
    return {
      ...state,
      filter_products: [...action.payload],
      //   [...action.payload] means use copy of orignail data
      all_products: [...action.payload],
    };
  }
  if (action.type === "set_grid_view") {
    return {
      ...state,
      grid_view: true,
    };
  }
  return state;
};
export default filterReducer;
