import { useState, memo, useMemo, useCallback } from "react";
import "./App.css";

function Swatch({ params, onClick }) {
  console.log("Swatch is rendering");
  return (
    <div
      style={{ width: 100, height: 100, backgroundColor: params.color }}
    ></div>
  );
}

const MemorizedComponent = memo(Swatch);

function App() {
  console.log("App is rendering");
  const [renderApp, setRenderApp] = useState(0);
  const [color, setColor] = useState("red");

  const params = useMemo(() => {
    console.log("Memo running");
    return { color };
  }, [color]);

  console.log(`Current value of renderApp: ${renderApp}`);

  const clickFn = useCallback(() => {}, []);

  return (
    <div className="app">
      <button onClick={() => setRenderApp(renderApp + 1)}>Re-render App</button>
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>
        Change color
      </button>
      <MemorizedComponent params={params} onClick={clickFn} />
    </div>
  );
}

export default App;
