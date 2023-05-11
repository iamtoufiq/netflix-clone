import { createStore } from "redux";
// above we have create the store

import rootReducer from "./Reducers/Index";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
