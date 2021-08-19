import { createStore } from "redux";
import reducer from "./reducer/root";
import state from "./state";
import { composeWithDevTools } from "redux-devtools-extension";
 const store = createStore(reducer,state,composeWithDevTools())

export default store
