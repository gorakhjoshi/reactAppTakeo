import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const theme = {
  colors: {
    primary: "blue",
    secondary: "cyan",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
