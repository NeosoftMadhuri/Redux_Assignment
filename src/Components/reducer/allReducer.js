import { addCard } from "./addEmp";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    addCard:addCard
})
export default rootReducer