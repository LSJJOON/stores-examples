import { combineReducers } from "redux";
import todo from "src/stores/redux/todoReducers";

const rootReducer = combineReducers({ todo });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
