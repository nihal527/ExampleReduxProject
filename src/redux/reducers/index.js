import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriyListReducer from "./categoriyListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoriyListReducer,
  productListReducer,
  cartReducer,
});
export default rootReducer;
