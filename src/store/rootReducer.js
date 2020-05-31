import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepages from "./homepages/reducer";
export default combineReducers({
  appState,
  homepages,
  user,
});
