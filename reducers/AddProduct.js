import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from "../actionTypes/AddProduct";

export default (
  prevState = {
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...prevState,
        isLoading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...prevState,
        isLoading: false
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...prevState,
        isLoading: false
      };
    default:
      return prevState;
  }
};
