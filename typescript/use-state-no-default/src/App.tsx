import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, []);

  return <div>{count}</div>;
}
