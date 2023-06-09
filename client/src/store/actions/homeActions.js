import { showError, showSuccess } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";
import axios from 'axios';

export const homeActionTypes = {
  "HOME_DATA_LOADED": "HOME_DATA_LOADED",
}


export const loadHomeData = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.home.allRecordsLoaded) // don't send request again and again if all records have loaded
      return;

    dispatch(showProgressBar());
    axios.get('api/products/home').then(({ data }) => {

      axios.get('api/store').then(({ data: { site } }) => {
        dispatch(hideProgressBar());

        dispatch({ type: homeActionTypes.HOME_DATA_LOADED, payload: { data, site } });
      }).catch(err => {
        dispatch(hideProgressBar());
        dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
      });

    }).catch(err => {
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}