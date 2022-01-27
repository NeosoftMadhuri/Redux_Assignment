import { createStore } from "redux";
import rootReducer from "./reducer/allReducer";
const store=createStore(rootReducer);
export default store;