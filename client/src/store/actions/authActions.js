
export const authActionsTypes = {
  LOGIN : "login",
  LOGOUT : "logout",
  AUTH_ERROR : "auth_error"
}



export const logout = (dispatch,getState) => {
  dispatch({ type : authActionsTypes.LOGOUT })
  localStorage.removeItem("token")
}