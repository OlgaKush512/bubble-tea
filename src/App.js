import "./App.css";
import MainEcran from "./components/MainEcran";
import { theme, darkTheme } from "./mainTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainEcran />
      </div>
    </ThemeProvider>
  );
}

export default App;
