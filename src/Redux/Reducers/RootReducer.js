import { combineReducers } from "redux";
import {
  productReducer,
  filteredProductReducer,
  selectedProduct,
  ShoppingCart,
} from "./ProductReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  filteredProducts: filteredProductReducer,
  ShoppingCart: ShoppingCart,
  selectedProduct: selectedProduct,
});

export default rootReducer;
