import {productWatchers} from "./product";
import {addProductWatchers} from "./AddProduct";
import { storesWatchers } from "./store";
import { getProductDetailsWatchers } from "./ProductDetails";
import { productSearchWatchers } from "./SearchItem";

export default function* rootWatchers() {
    yield [productWatchers(), addProductWatchers(), storesWatchers(), getProductDetailsWatchers(), productSearchWatchers()]

}