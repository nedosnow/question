import { combineReducers } from "redux";
import numberReducer from "./number";
import questionsReducer from "./question";

const reducer = combineReducers({
  questions: questionsReducer,
  number: numberReducer,
});
export default reducer
