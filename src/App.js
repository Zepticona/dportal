import React, { createContext, useState } from 'react';
import AvailableAppointments from './components/AvailableAppointments/AvailableAppointments';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookAppointment from './components/BookAppointment/BookAppointment';
import Login from './components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/availableAppointments">
              <AvailableAppointments />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/bookAppointment/:appointmentId">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
