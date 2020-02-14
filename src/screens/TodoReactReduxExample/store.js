// screens/TodoReactReduxExample/store

import { createStore } from "redux";
import { reducer } from "screens/TodoReactReduxExample/todoListRedux";

// Create a store with our reducer
const store = createStore(reducer);

export default store;
