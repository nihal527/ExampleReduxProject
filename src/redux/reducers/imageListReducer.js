import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function imageListReducer(state = initialState.images, action) {
  switch (action.type) {
    case actionTypes.GET_IMAGES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
