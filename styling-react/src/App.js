import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./styles/Global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
