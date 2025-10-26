import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar/Navbar";
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Coffee from "./components/Coffee/Coffee";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Coffee />
      </ThemeProvider>
    </>
  );
}

export default App;
