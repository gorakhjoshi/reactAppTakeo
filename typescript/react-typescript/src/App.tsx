function NameTag({ name }: { name: string }) {
  return <div>{name}</div>;
}

function App() {
  return <NameTag name="React" />;
}

export default App;
