type NameTagChildren = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

function NameTag({ children, style }: NameTagChildren) {
  return <div style={style}>{children}</div>;
}

function App() {
  return (
    <NameTag style={{ backgroundColor: "red" }}>
      <h1>I love React</h1>
    </NameTag>
  );
}

export default App;
