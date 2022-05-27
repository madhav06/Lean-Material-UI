import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Paintings from './pages/Paintings'
import Create from './pages/Create'
import Contact from './pages/Contact';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Paintings />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
