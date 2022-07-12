import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement() {
      state.counter--;
    },
    toggle() {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export default store;
