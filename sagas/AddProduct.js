import {
    put,
    takeLatest
} from "redux-saga/effects";

import {
    ADD_PRODUCT
} from "../actionTypes/AddProduct"; 
import {addProductFailure, addProductSuccess}from "../actionCreators/AddProduct"

let URI = "http://172.16.105.165:4000";

function* addProduct(action) {
    try {
        let product =  fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
          })
        yield put(addProductSuccess(product))
    } catch (error) {
        yield put(addProductFailure(error))
    }
}

export function* addProductWatchers() {
    yield takeLatest(ADD_PRODUCT, addProduct)
}