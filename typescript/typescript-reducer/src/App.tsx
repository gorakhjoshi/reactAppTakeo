import { useState } from "react";

type PersonProp<T> = {
  name: T;
};

const person: PersonProp<string> = {
  name: "Alex",
};

type Link<U> = {
  value: U;
  next?: Link<U>;

};

const firstValue: Link<number[]> = {
  value: [30, 40],
};

const secondValue: Link<string[]> = {
  value: ["thirty", "fourty"],
};

const thirdValue: Link<number> = {
  value: 45,
  next: {
    value: 67,
  },
};

function createNode<T>(value: T): Link<T> {
  return { value};
}

createNode(20)
createNode('20')

function App() {
  const [age, setAge] = useState<number | null>(null);
  return <div>App</div>;
}

export default App;
