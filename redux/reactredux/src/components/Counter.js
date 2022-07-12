import classes from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {count} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
