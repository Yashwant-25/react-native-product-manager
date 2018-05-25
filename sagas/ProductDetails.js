import {
    put,
    takeLatest
} from "redux-saga/effects";

import {
    GET_PRODUCT_DETAILS
} from "../actionTypes/GetProductDetail"; 
import {getProductSuccess, getProductFailure}from "../actionCreators/GetProductDetail"

let URI = "http://172.16.105.165:4000";

function* getProductDetails(action) {
    try {
        let productDetails = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(getProductDetailsSuccess(productDetails))
    } catch (error) {
        yield put(getProductDetailsFailure(error))
    }
}

export function* getProductDetailsWatchers() {
    yield takeLatest(GET_PRODUCT_DETAILS, getProductDetails)
}