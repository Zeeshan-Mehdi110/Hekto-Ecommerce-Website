import { combineReducers } from "redux";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const allReducers = {
  users: userReducer,
  progressBar: progressReducer,
  auth: authReducer,
  products: productReducer,
  categories: categoryReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
