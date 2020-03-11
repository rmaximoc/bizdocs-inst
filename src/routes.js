import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bizdocs from './pages/Bizdocs';

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
      </Switch>
    </Router>
  );
}

export default App;
