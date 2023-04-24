import axios from "axios";

export const userAction = {
    USER_SIGNUP: "userSignup",
    USER_SIGNIN: "userSignin",
    LOAD_TOKEN : "load-token",
    AUTH_FAILD : "Authentication failed",
    PROFILE_LOADED : 'profile-loaded'
}

export const userSignUpFunction = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: userAction.USER_SIGNUP, data });
    }
}
export const userSignInFunction = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: userAction.USER_SIGNIN, data });

    }
}

export const loadAuth = () => {
    return (dispatch,getState) => {
        axios.get("api/user/profile").then(result => {
            dispatch ({
                type : userAction.PROFILE_LOADED, user : result.data
            })
        }).catch(err => {

        })
    }
}