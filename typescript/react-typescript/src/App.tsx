type NameTagChildren = { children: React.ReactNode };

function NameTag({ children }: NameTagChildren) {
  return <>{children}</>;
}

function App() {
  return (
    <NameTag>
      <h1>I love React</h1>
      <h1>I love React</h1>
    </NameTag>
  );
}

export default App;
