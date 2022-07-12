import { createStore } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  return state;
};

const store = createStore(counterReducer);

export default store;
