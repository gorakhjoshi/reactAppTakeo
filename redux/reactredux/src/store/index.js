import { createStore } from "redux";

const counterReducer = (
  state = { countryName: "Nepal", capital: "kathmandu" },
  action
) => {
  return state;
};

const store = createStore(counterReducer);

export default store;
