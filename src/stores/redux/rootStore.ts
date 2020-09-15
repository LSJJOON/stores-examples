import { createStore } from "redux";
import rootReducer from "src/stores/redux/rootReducer";

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
