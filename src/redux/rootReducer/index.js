import { combineReducers } from "redux";
import authReducer from "../../components/Auth/reducers";
import sidebarReducer from '../reducers/sidebarReducer';

export const rootReducer = combineReducers({
  user: authReducer,
  sidebar: sidebarReducer
});
