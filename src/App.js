import React from 'react';
import AvailableAppointments from './components/AvailableAppointments/AvailableAppointments';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/availableAppointments">
            <AvailableAppointments />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>    
  );
}

export default App;
