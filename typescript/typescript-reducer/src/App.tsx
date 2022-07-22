import { createContext } from "react";

const theme = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

function App() {
  return <ThemeProvider>App</ThemeProvider>;
}

export default App;