import CountDisplay from "./components/CountDisplay";
import Counter from "./components/Counter";
import { useCount } from "./hooks/useCount";

function App() {
  const { greeting } = useCount();

  return (
    <>
      {greeting}
      <CountDisplay />
      <Counter />
    </>
  );
}

export default App;
