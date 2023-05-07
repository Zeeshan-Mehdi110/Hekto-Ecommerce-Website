import { userActionTypes } from "../actions/userActions";

const initialState = {
    users: [],
    totalRecords: 0,
    allRecordsLoaded: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case userActionTypes.REMOVE_USER:
            const newUsers = state.users.filter(item => item.id === action.payload ? false : true);
            return {
                ...state,
                users: newUsers
            }
        case userActionTypes.USERS_LOADED:
            return {
                ...state,
                totalRecords: action.payload.totalRecords,
                allRecordsLoaded: action.payload.allRecordsLoaded,
                users: [...action.payload.users, ...state.users]
            }
        default:
            return state;
    }
}

export default userReducer