import { combineReducers } from "redux";
import completeReducer from "./completeReducer";
import incompleteReducer from "./incompleteReduxer";

export default combineReducers({
    complete: completeReducer,
    incomplete: incompleteReducer
});