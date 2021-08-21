import React from 'react';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';

import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
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
          <Route path="/:uid">
            <UserPlaces/>
          </Route>
          <Route path="/places/new">
            <div>Rest</div>
              {/* <NewPlace /> */}
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}
export default App;
