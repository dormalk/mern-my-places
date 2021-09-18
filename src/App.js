import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';

import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import {NewPlace,UpdatePlace} from './places/pages';

import { MainNavigation } from './shared/components';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  let routes;
  if(!isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
            <Users />
        </Route>
        <Route path="/:uid/places" exact>
            <UserPlaces/>
          </Route>
        <Route path="/auth">
              <Auth/>
            </Route>
        <Redirect to="/auth" />
      </Switch>
    ) 
  } else {
    routes = (
      <Switch>
          <Route path="/" exact>
              <Users />
          </Route>
          <Route path="/:uid/places" exact>
            <UserPlaces/>
          </Route>
          <Route path="/places/new">
              <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace/>
          </Route>
          <Redirect to="/" />
      </Switch>
    )
  }

  const login = useCallback(() => {
    setIsLoggedIn(true)
  },[])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  },[])

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login,
      logout
    }}>
      <Router>
        <MainNavigation/>
        <main>
            {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  )
}
export default App;
