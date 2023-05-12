import { authActionsType } from "../actions/authActions"


const initState = {
    user: null,
    token: null,
    isLogined: false,
    userType: null,
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authActionsType.SIGN_IN:
            return {
                ...state,
                user: action.user,
                token: action.token,
                userType: action.user.type,
                isLogined: true,
            }
        case authActionsType.LOAD_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case authActionsType.AUTH_LOADED:
            console.log(action)
            return {
                ...state,
                user: action.user,
                userType: action.user.type,
                isLoaded: true
            }
        default:
            return state
    }
}

export default authReducer;