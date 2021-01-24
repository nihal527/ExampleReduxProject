import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriyListReducer from "./categoriyListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoriyListReducer,
  productListReducer,
  cartReducer,
  saveProductReducer,
});
export default rootReducer;
