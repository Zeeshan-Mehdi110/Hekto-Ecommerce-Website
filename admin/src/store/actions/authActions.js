import axios from "axios";
import { showError } from "./alertActions";

export const authActionsType = {
  SIGN_IN: "signIn",
  SIGN_OUT: "signOut",
  AUTH_LOADED: "authLoaded",
  AUTH_FAILED: "authFailed",
  LOAD_TOKEN: "loadToken",
};

export const signin = (user, token) => ({
  type: authActionsType.SIGN_IN,
  user,
  token,
});
export const signOut = () => {
  localStorage.removeItem("token");
  return { type: authActionsType.SIGN_OUT };
};

export const loadAuth = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: authActionsType.LOAD_TOKEN,
      token: token ? token : null,
    });

    axios
      .get("/users/profile")
      .then(({ data }) => {
        dispatch({
          type: authActionsType.AUTH_LOADED,
          user: data.user,
        });
      })
      .catch((err) => {
        if (token) dispatch(showError(err.message));
      });
  };
};
