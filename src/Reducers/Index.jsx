import loginAndLogout from "./UpDown";
// now  to combine all the reducer we will use combinereducer
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginAndLogout: loginAndLogout,
});
export default rootReducer;
