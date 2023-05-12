import axios from "axios"
// import { authActions } from "../store/actions/authActions";

export default function configureAxios(store) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.interceptors.request.use( config => {
    if (!config.headers.Authorization) {
      const state = store.getState();
      if (state.auth.token)
        config.headers.Authorization = 'Bearer ' + state.auth.token;
    }
    return config;
  }, error => Promise.reject(error));
}