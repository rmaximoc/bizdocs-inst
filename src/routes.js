import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bizdocs from './pages/Bizdocs/Bizdocs';
import Empresas from './pages/Empresas/Empresas';
import PlanDetails from './pages/PlanDetails/PlanDetails';
import Benefits from './pages/Benefits/Benefits';
import PlansAndPrices from './pages/PlansAndPrices/PlansAndPrices';
import Security from './pages/Security/Security';

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
