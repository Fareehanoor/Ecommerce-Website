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
  if (action.type === "set_list_view") {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === "get_sort_value") {
    let userSortValue = document.getElementById("sort");
    let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
    console.log("Sort value:::", sortValue);
    return {
      ...state,
      selected_sort_value: sortValue,
    };
  }

  return state;
};
export default filterReducer;
