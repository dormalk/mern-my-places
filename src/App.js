import React from 'react';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/newPlace';
import { MainNavigation } from './shared/components';


const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact>
              <Users />
          </Route>
          <Route path="/places/new">
              <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}
export default App;
