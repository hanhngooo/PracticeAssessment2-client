import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepages from "./homepages/reducer";
import detailHomepage from "./detailHomepage/reducer";
export default combineReducers({
  appState,
  homepages,
  detailHomepage,
  user,
});
