import { userAction } from "../action/userActions";


const initState = {
    user: {},
    token: null,
    logedin: false,
}

function userReducer(state = initState, action) {
    switch (action.type) {
      case userAction.USER_SIGNUP:
        return {
            ...state,
            token: action.data.token,
            logedin: true,
            user: action.data.user,
        };
      case userAction.USER_SIGNIN:
        return {
          ...state,
          token: action.data.token,
          logedin: true,
          user: action.data.user,
        };
      case userAction.LOAD_TOKEN :
      return {
        ...state,
        token : action.token
      }
      case userAction.PROFILE_LOADED : 
      return {
        ...state,
        logedin : true,
        user : action.user
      }
      case userAction.AUTH_FAILD :
        return initState
      default:
        return state;
    }
  }

  export default userReducer