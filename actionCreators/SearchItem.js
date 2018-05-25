import {
    GET_PRODUCTS_FROM_SEARCH,
    GET_PRODUCTS_FROM_SEARCH_SUCCESS,
    GET_PRODUCTS_FROM_SEARCH_FAILURE,
} from "../actionTypes/SearchItem";

// export const GET_PRODUCTS = 'GET_PRODUCTS'
// export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
// export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
// export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

// export const GET_PRODUCT = 'GET_PRODUCT'
// export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
// export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

export function getSearchProducts(page, limit) {
    return {
        type: GET_PRODUCTS_FROM_SEARCH,
        page,
        limit
    }
}

export function getSearchProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS_FROM_SEARCH,
        products
    }
}

export function getSearchProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE_FROM_SEARCH,
        error
    }
}