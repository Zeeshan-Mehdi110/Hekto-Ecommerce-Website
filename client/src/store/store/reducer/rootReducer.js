import { combineReducers } from "redux";
import userReducer from "./userReducer";



const allReducers = {
    users: userReducer,
}
const rootReducer = combineReducers(allReducers)
export default rootReducer;