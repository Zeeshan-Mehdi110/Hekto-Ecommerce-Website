import { homeActionTypes } from "../actions/homeActions";

const initialState = {
    allRecordsLoaded: false,
    data: null,
    site: null
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case homeActionTypes.HOME_DATA_LOADED:
            return { ...state, data: action.payload.data, site: action.payload.site, allRecordsLoaded: true }
        default:
            return state;
    }
}

export default homeReducer