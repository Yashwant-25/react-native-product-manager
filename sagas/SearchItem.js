import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/SearchItem"
import {
    GET_PRODUCTS_FROM_SEARCH
} from "../actionTypes/SearchItem";

let URI = "http://172.16.105.165:4000";

function* getProductsFromSearch(action) {
    try {
        let products = yield fetch(`${URI}/products?q=${action.searchText}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getSearchProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getSearchProductsFailure(error))
    }
}

export function* productSearchWatchers() {
    yield takeLatest(GET_PRODUCTS_FROM_SEARCH, getProductsFromSearch)
}