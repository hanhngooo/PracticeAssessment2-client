import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_DETAILHOMEPAGE_SUCCESS = "FETCH_DETAILHOMEPAGE_SUCCESS";
export const fetchDetailHomepageSuccess = (homepage) => ({
  type: FETCH_DETAILHOMEPAGE_SUCCESS,
  payload: homepage,
});
export const fetchDetailHomepage = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);

    console.log("homepage", response.data);
    dispatch(fetchDetailHomepageSuccess(response.data));
  };
};
