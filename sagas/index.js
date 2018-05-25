import {productWatchers} from "./product";
import {addProductWatchers} from "./AddProduct";
import { storesWatchers } from "./store";
import { getProductDetailsWatchers } from "./ProductDetails";

export default function* rootWatchers() {
    yield [productWatchers(), addProductWatchers(), storesWatchers(), getProductDetailsWatchers()]

}