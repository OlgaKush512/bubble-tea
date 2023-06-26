import './App.css';
import MainEcran from './components/MainEcran';
import { theme, darkTheme } from './mainTheme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const themeState = useSelector((state) => state.night.isNight);

  const mainTheme = themeState ? darkTheme : theme;

  function delBefore() {
    const el = document.body;
    if (el !== null) {
      el.className = 'new';
    }
  }

  function delNew() {
    const el = document.body;
    if (el !== null) {
      el.className = 'old';
    }
  }

  useEffect(() => {
    if (mainTheme === darkTheme) {
      delBefore();
    } else if (mainTheme === theme) {
      delNew();
    }
  }, [mainTheme]);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <div className="App">
        <MainEcran />
      </div>
    </ThemeProvider>
  );
}

export default App;
