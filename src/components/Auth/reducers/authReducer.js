import { initialState } from "./initialState";
import { LOG_IN, LOG_OUT, SIGN_UP } from "../actionTypes";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        ...(action.payload && action.payload.data),
        loginStatus: action.payload && action.payload.status
      };

    case LOG_OUT:
      return { ...state };
    case SIGN_UP:
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
