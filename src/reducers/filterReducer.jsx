const filterReducer = (state, action) => {
  if (action.type === "load_filter_products") {
    let priceArr = action.payload.map((curElem) => curElem.price);
    let maxPrice = Math.max(...priceArr);
    let minPrice = Math.min(...priceArr);

    console.log("maxPrice::::", maxPrice);
    console.log("minPrice::::", minPrice);

    return {
      ...state,
      filter_products: [...action.payload],
      //   [...action.payload] means use copy of orignail data
      all_products: [...action.payload],
      filters: { ...state.filters, maxPrice, minPrice, price: maxPrice },
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

  if (action.type === "update_filter_value") {
    const { name, value } = action.payload;

    console.log("Reducer Update:", name, value);
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === "filter_products") {
    let { all_products } = state;
    let tempFilterProducts = [...all_products];

    const { text, category, company, colors, price } = state.filters;
    if (text) {
      tempFilterProducts = tempFilterProducts.filter((currElement) => {
        return currElement.name.toLowerCase().includes(text);
      });
    }
    if (category !== "all") {
      tempFilterProducts = tempFilterProducts.filter(
        (currElement) => currElement.category === category
      );
    }
    if (company !== "all") {
      tempFilterProducts = tempFilterProducts.filter(
        (currElement) => currElement.company === company
      );
    }
    if (colors !== "all") {
      tempFilterProducts = tempFilterProducts.filter((currElement) =>
        currElement.colors.includes(colors)
      );
    }

    if (price === 0) {
      tempFilterProducts = tempFilterProducts.filter(
        (curElem) => curElem.price == price
      );
    } else {
      tempFilterProducts = tempFilterProducts.filter(
        (curElem) => curElem.price <= price
      );
    }

    return {
      ...state,
      filter_products: tempFilterProducts,
    };
  }
  if (action.type === "clear_filter") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        maxPrice: 0,
        price: state.filters.maxPrice,
        minPrice: state.filters.maxPrice,
      },
    };
  }
  return state;
};
export default filterReducer;
