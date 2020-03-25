import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Bizdocs from './pages/Bizdocs/Bizdocs';
import Empresas from './pages/Empresas/Empresas';
import PlanDetails from './pages/PlanDetails/PlanDetails';
import Benefits from './pages/Benefits/Benefits';
import PlansAndPrices from './pages/PlansAndPrices/PlansAndPrices';
import Security from './pages/Security/Security';
import News from './pages/News/News';
import OpenedNews from './pages/OpenedNews/OpenedNews';
import theme from './config/theme';
import ScrollToTop from './utils/toTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/bizdocs">
              <Bizdocs />
            </Route>
            <Route path="/empresas">
              <Empresas />
            </Route>
            <Route path="/plans/plan-details">
              <PlanDetails />
            </Route>
            <Route path="/plans/benefits">
              <Benefits />
            </Route>
            <Route path="/plans-and-prices">
              <PlansAndPrices />
            </Route>
            <Route path="/security">
              <Security />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/opened-news">
              <OpenedNews />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
