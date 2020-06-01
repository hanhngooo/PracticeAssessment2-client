import { FETCH_DETAILHOMEPAGE_SUCCESS } from "./actions";
const initialState = {
  stories: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILHOMEPAGE_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
