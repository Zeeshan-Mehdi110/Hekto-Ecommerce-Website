import { showError } from "./alertActions";
import { hideProgressBar, showProgressBar } from "./progressActions";
import axios from 'axios';

export const userActionTypes = {
  "ADD_USER": "ADD_USER",
  "REMOVE_USER": "REMOVE_USER",
  "USERS_LOADED": "USERS_LOADED",
}



//Load All stores
export const loadUsers = () => {
  return (dispatch, getState) => {
    const state = getState();
    
    if (state.users.allRecordsLoaded) // don't send request again and again if all records have loaded
      return;
      
    let skipRecords = 0;
    if (state.users.users.length === 0) {
      dispatch(showProgressBar());
    }
    else
      skipRecords = state.users.users.length;

    axios.get('/api/users', { params: { skip: skipRecords, } }).then(({ data }) => {
      const state = getState();
      if (state.users.users.length === 0)
        dispatch(hideProgressBar());
      
      const allRecordsLoaded = (state.users.users.length + data.users.length ) === state.users.totalRecords;
      dispatch({ type: userActionTypes.USERS_LOADED, payload: { users: data.users, totalRecords: data.totalRecords, allRecordsLoaded } });
    }).catch(err => {
      dispatch(hideProgressBar());
      dispatch(showError(err.response && err.response.data.message ? err.response.data.message : err.message));
    });
  }
}