import {
  GET_PRODUCTS_FROM_SEARCH,
  GET_PRODUCTS_FROM_SEARCH_FAILURE,
  GET_PRODUCTS_FROM_SEARCH_SUCCESS
} from "../actionTypes/SearchItem";

export default (
  prevState = {
    products: [],
    isLoading: false,
    page: 1,
    limit: 8
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_FROM_SEARCH:
      const { page } = action;
      return {
        ...prevState,
        isLoading: page === 1,
        page
      };
    case GET_PRODUCTS_FROM_SEARCH_SUCCESS: {
      const { page } = prevState;
      const products =
        page === 1
          ? action.products
          : prevState.products.concat(action.products);
      return {
        ...prevState,
        isLoading: false,
        products
      };
    }
    case GET_PRODUCTS_FROM_SEARCH_FAILURE:
      return {
        ...prevState,
        isLoading: false,
        error
      };
    default:
      return prevState;
  }
};
