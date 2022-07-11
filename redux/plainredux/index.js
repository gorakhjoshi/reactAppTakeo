import redux from "redux";

const DECREMENT = "DECREMENT_BY_10";

function reducer(state = 0, action) {
  console.log("Reducer is Running!");
  console.log(state);
  console.log(action.type);
  if (action.type === DECREMENT) {
    console.log("I am decrementing");
    return state - 10;
  }

  if (action.type === "INCREMENT") {
    console.log("I am decrementing");
    return state + 1;
  }
  return state;
}

const store = redux.createStore(reducer);

const countSubscriber = () => {
  console.log("countSubscriber is running");
  const state = store.getState();
  console.log(state);
};

store.subscribe(countSubscriber);

store.dispatch({ type: DECREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: "INCREMENT" });
