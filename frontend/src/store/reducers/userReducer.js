import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "../actions/userActions";

const initialState = {
  loginError: null,
  user: null,
  registerError: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {...state,
        registerError: null,
        user: action.user};
    case REGISTER_USER_FAILURE:
      return {...state,
        registerError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state,
        loginError: null,
        user: action.user};
    case LOGIN_USER_FAILURE:
      return {...state,
        loginError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    default:
      return state;
  }
};
export default userReducer;