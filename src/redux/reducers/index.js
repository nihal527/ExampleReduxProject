import { combineReducers } from "redux";
import imageListReducer from "./imageListReducer";
import favoriteImagesReducer from "./favoriteImagesReducer";

const rootReducer = combineReducers({
  imageListReducer,
  favoriteImagesReducer,
});
export default rootReducer;
