import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_PRODUCT_TO_WISH
} from "../actionTypes/product";

// export const GET_PRODUCTS = 'GET_PRODUCTS'
// export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
// export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
// export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

// export const GET_PRODUCT = 'GET_PRODUCT'
// export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
// export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function addToWishList(id) {
    return {
        type: ADD_PRODUCT_TO_WISH,
        id,
    }
}