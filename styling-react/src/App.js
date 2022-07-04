import style from "./App.module.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Button />
      <div className={style.header}>I am header from App.js</div>
    </>
  );
}

export default App;
