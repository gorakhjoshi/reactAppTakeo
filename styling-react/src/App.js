import { ThemeProvider } from "styled-components";
import ControlledAccordions from "./components/Accordion";
import BasicButtons from "./components/Button";
import Header from "./components/Header";
import GlobalStyles from "./styles/Global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <BasicButtons />
      <ControlledAccordions />
    </ThemeProvider>
  );
}

export default App;
