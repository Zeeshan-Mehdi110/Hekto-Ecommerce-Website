import { combineReducers } from "redux";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer"
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";

const allReducers = {
    users: userReducer,
    progressBar: progressReducer,
    auth : authReducer,
    categories : categoryReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;