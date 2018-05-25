import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS
} from "../actionTypes/GetProductDetail";

const initialState = {
  productDetails: {}
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...prevState,
        isLoading: false
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...prevState,
        isLoading: false
      };
    default:
      return prevState;
  }
};
