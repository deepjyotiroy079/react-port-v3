import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Content from "./components/content/Content";
import { useDarkMode } from "./styles/darkMode";
import Toggle from "./components/toggle/Toggle";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/globalStyles";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 2rem;
  @media screen and (max-width: 786px) {
    max-width: 90%;
    margin: 6rem auto 2rem;
  }
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  console.log(theme);
  return (
    // <Navbar />
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
