import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_ID_SUCCESS,
  SEND_ITEM_SUCCESS, SEND_ITEM_FAILURE
} from "../actions/itemActions";

const initialState = {
  items: [],
  itemId: [],
  error: null
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.data,
        error: null
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case SEND_ITEM_SUCCESS:
      return {
        ...state,
        error: null
      };
    case SEND_ITEM_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_ITEMS_ID_SUCCESS:
      return {
        ...state,
        itemId: action.data
      };
    default:
      return state;
  }
};
export default itemReducer;