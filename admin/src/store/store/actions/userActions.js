import { showError } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";
import axios from 'axios';

export const userActionTypes = {
  "ADD_USER": "ADD_USER",
  "REMOVE_USER": "REMOVE_USER",
  "USERS_LOADED": "USERS_LOADED",
}



//Load All stores
export const loadUsers = (currentPage = 1, recordsPerPage = process.env.REACT_APP_RECORDS_PER_PAGE) => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.users.allRecordsLoaded) // don't send request again and again if all records have loaded
      return;

    let skipRecords = 0;
    if (state.users.users.length === 0) {
      dispatch(showProgressBar());
    }
    else
      skipRecords = (currentPage) * recordsPerPage;

    axios.get('/users', { params: { skip: skipRecords, limit: recordsPerPage} }).then(({ data }) => {
      const state = getState();
      if (state.users.users.length === 0)
        dispatch(hideProgressBar());

      const allRecordsLoaded = (state.users.users.length + data.users.length ) === data.totalRecords;
      dispatch({ type: userActionTypes.USERS_LOADED, payload: { users: data.users, totalRecords: data.totalRecords, allRecordsLoaded, page: currentPage } });
    }).catch(err => {
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}