import {
    combineReducers
} from "redux";
import productReducer from "./product";
import storeReducer from "./store"
import {
    createNavigationReducer
} from "react-navigation-redux-helpers";
import {AppNavigator} from "../containers/AppNavigator";
import AddProduct from "./AddProduct";
import ProductDetails from "./ProductDetails";
import SearchItems from "./SearchItems";


const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    productState: productReducer,
    storeState: storeReducer,
    navState: navReducer,
    AddState: AddProduct,
    productDetailsState:  ProductDetails,
    searchState: SearchItems
})

export default rootReducer;