import { useState, memo } from "react";
import "./App.css";

function Swatch({ color }) {
  console.log("Swatch is rendering");
  return (
    <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
  );
}

const MemorizedComponent = memo(Swatch);

function App() {
  console.log("App is rendering");
  const [renderApp, setRenderApp] = useState(0);
  console.log(`Current value of renderApp: ${renderApp}`);

  return (
    <div className="app">
      <button onClick={() => setRenderApp(renderApp + 1)}>Re-render App</button>
      <MemorizedComponent color="red" />
    </div>
  );
}

export default App;
