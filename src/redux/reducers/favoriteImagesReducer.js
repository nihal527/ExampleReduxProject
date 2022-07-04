import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function favoriteImagesReducer(
  state = initialState.favoriteImages,
  action
) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITE:
      var addedItem = state.find((c) => c.image.id === action.payload.image.id);
      if (addedItem) {
        const newState = state.map((imageItem) => {
          if (imageItem.image.id === action.payload.image.id) {
            return Object.assign({}, addedItem, {
              isAdding: !addedItem.isAdding,
            });
          }
          return imageItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_FAVORITE:
      const newState = state.filter((imageItem) => {
        return imageItem.image.id !== action.payload.image.image.id;
      });
      return newState;

    default:
      return state;
  }
}
