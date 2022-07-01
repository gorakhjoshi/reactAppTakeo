import { useReducer } from "react";

function reducer(state, action) {
  if (action === "Increase by 10") {
    return {
      ...state,
      increaseByTen: state.increaseByTen + 10,
    };
  }
  if (action === "Increase by 20") {
    return { ...state, increaseByTwenty: state.increaseByTwenty + 20 };
  }
  return { ...state, payload: state.payload + 40 };
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    increaseByTen: 0,
    increaseByTwenty: 0,
    payload: 0,
  });
  return (
    <>
      <button onClick={() => dispatch()}>Click</button>
      <h1>{state.payload}</h1>
      <button onClick={() => dispatch("Increase by 10")}>Increase by 10</button>
      <div>{state.increaseByTen}</div>
      <button onClick={() => dispatch("Increase by 20")}>Increase by 20</button>
      <div>{state.increaseByTwenty}</div>
    </>
  );
}
export default App;
