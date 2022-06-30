import React from "react";
// useContext: simple Counter

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  const value = [count, setCount];

  return <CountContext.Provider value={value} {...props} />;
}

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
  return (
    <div>
      <CountProvider>
        <Counter />
        <CountDisplay />
      </CountProvider>
    </div>
  );
}

export default App;
