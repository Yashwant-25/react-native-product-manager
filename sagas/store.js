import {
    put,
    takeLatest
} from "redux-saga/effects";

import {
    GET_STORES
} from "../actionTypes/store"; 
import {getStoresSuccess, getStoresFailure}from "../actionCreators/store"

let URI = "http://172.16.105.165:4000";

function* getStores(action) {
    try {
        const stores = [
            {
              latitude: 13.019995,
              longitude: 80.185405,
              title: "Bay Store",
              id: "s1"
            },
            {
                latitude: 13.040172,
                longitude: 80.184968,
                title: "Pep Store",
                id: "s2"
            },
            {
                latitude: 12.990172,
                longitude: 80.183968,
                title: "Dry Store",
                id: "s3"
              }
          ]

        yield put(getStoresSuccess(stores))
    } catch (error) {
        yield put(getStoresFailure(error))
    }
}

export function* storesWatchers() {
    yield takeLatest(GET_STORES, getStores)
}