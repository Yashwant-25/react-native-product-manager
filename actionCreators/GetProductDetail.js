import {
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILURE,
} from "../actionTypes/GetProductDetail";

export function getProductDetails(id) {
    return {
        type: GET_PRODUCT_DETAILS,
        id
    }
}

export function getProductDetailsSuccess(productDetails) {
    return {
        type: GET_PRODUCT_DETAILS_SUCCESS,
        productDetails
    }
}

export function getProducDetailstFailure(error) {
    return {
        type: GET_PRODUCT_DETAILS_FAILURE,
        error
    }
}
