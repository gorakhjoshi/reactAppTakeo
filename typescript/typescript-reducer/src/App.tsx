interface animal {
  name: string;
}

interface dog extends animal {
  breed: string;
}

interface cat extends dog {
  age: number;
}

function App() {
  const cat: cat = {
    name: "Alex",
    breed: "Yes",
    age: 5
  };
  
  return <div>App</div>;
}

export default App;
