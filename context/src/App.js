import React from "react";
// useContext: simple Counter

const CountContext = React.createContext();

function CountDisplay() {
  const [count] = React.useContext(CountContext);

  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, setCount] = React.useContext(CountContext);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value}>
      <Counter />
      <CountDisplay />
    </CountContext.Provider>
  );
}

export default App;
