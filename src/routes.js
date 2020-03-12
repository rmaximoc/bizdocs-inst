import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bizdocs from './pages/Bizdocs/Bizdocs';
import Empresas from './pages/Empresas/Empresas';
import PlanDetails from './pages/PlanDetails/PlanDetails'

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
      </Switch>
    </Router>
  );
}

export default App;
