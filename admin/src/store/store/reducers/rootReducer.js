import { combineReducers } from "redux";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer"

const allReducers = {
    users: userReducer,
    progressBar: progressReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;