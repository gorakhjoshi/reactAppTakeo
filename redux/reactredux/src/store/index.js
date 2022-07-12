import { createStore } from "redux";

const counterReducer = (state = { count: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { ...state, count: state.count - action.payload };
  }

  if (action.type === "toggle") {
    return { ...state, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
