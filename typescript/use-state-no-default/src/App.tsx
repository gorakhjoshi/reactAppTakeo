import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(e);
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setCount(+e.target.value);
  }

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={changeHandler} />
      <button onClick={clickHandler}>Submit</button>
    </form>
  );
}

export default App;
