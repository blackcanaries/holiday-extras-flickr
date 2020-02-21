import { photoConstants } from "../constants";
import { getUnique } from "../utilities/functions";
import initialState from "./initialState";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case photoConstants.UPDATE_SUCCESS:    
      return {
        ...state,
        photos: getUnique([...state.photos, ...action.photo.photo]),
        total: parseInt(action.photo.total),
        page: action.photo.page,
        pages: action.photo.pages
      };

    case photoConstants.UPDATE_FAILURE:
      return state;
      
    case photoConstants.SEARCH_SUCCESS:      
      return {
        ...state,
        photos: getUnique(action.photo.photo),
        total: parseInt(action.photo.total),
        page: action.photo.page,
        pages: action.photo.pages
      };
      
    case photoConstants.SEARCH_FAILURE:
      return state;

    default:
      return state;
  }
}
