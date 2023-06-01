import axios from "axios";
import { showError } from "./alertActions";

export const authActionsType = {
  SIGN_IN: "signIn",
  SIGN_OUT: "signOut",
  AUTH_LOADED: "authLoaded",
  AUTH_FAILED: "authFailed",
  LOAD_TOKEN: "loadToken",
  AUTH_UPDATED: "authUpdated",
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_CONFIGURATION: 'UPDATE_CONFIGURATION',
  DASHBAORD_DATA_LOADED: 'DASHBAORD_DATA_LOADED'
}

export const updateUser = (user) => ({ type: authActionsType.UPDATE_USER, payload: user });
export const updateConfiguration = (site) => ({ type: authActionsType.UPDATE_CONFIGURATION, payload: site });

export const signin = (user, token) => {
  return (dispatch, getState) => {
    localStorage.setItem("token", token)

    // Set the Authorization header with the token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.get("/api/store").then(({ data }) => {
      // console.log("signin store data", data)
      dispatch({ type: authActionsType.UPDATE_CONFIGURATION, payload: data.site });
      dispatch({ type: authActionsType.DASHBAORD_DATA_LOADED, payload: { totalUsers: data.totalUsers, totalCategories: data.totalCategories, totalBrands: data.totalBrands, totalProducts: data.totalProducts } })
      dispatch({ type: authActionsType.SIGN_IN, user, token })
    })

  }
}

export const signOut = () => {
  localStorage.removeItem("token")
  return {
    type: authActionsType.SIGN_OUT
  }
}

export const loadAuth = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({ type: authActionsType.AUTH_FAILED }); // Dispatch an action indicating auth failed
      return; // Stop further execution of the function
    }

    dispatch({
      type: authActionsType.LOAD_TOKEN,
      token: token
    });

    axios.get('/api/users/profile')
      .then(result => {
        axios.get("/api/store").then(({ data }) => {
          // console.log("loadAuth store data", data)
          dispatch({ type: authActionsType.AUTH_LOADED, payload: { user: result.data.user, configuration: data.site } });
          dispatch({ type: authActionsType.DASHBAORD_DATA_LOADED, payload: { totalUsers: data.totalUsers, totalCategories: data.totalCategories, totalBrands: data.totalBrands, totalProducts: data.totalProducts } })
        })
      })
      .catch(error => {
        dispatch(showError(error.message))
      });
  }
}


export const authUpdate = (user) => ({ type: authActionsType.AUTH_UPDATED, user })