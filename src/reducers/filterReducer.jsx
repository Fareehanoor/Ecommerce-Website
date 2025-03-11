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
    return {
      ...state,
      selected_sort_value: action.payload,
    };
  }
  if (action.type === "sorting_products") {
    let newSortdata;

    const { filter_products, selected_sort_value } = state;
    let tempSortProduct = [...filter_products];

    const sortingProducts = (a, b) => {
      if (selected_sort_value === "lowest") {
        return a.price - b.price;
      }

      if (selected_sort_value === "highest") {
        return b.price - a.price;
      }

      if (selected_sort_value === "a-z") {
        return a.name.localeCompare(b.name);
      }

      if (selected_sort_value === "z-a") {
        return b.name.localeCompare(a.name);
      }
    };

    newSortdata = tempSortProduct.sort(sortingProducts);

    return {
      ...state,
      filter_products: newSortdata,
    };
  }

  return state;
};
export default filterReducer;
