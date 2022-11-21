import React from 'react';
import Home from './Components/routes/Home';
import Detail from './Components/routes/Detail';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/practiceReactJs/movie/:id'>
            <Detail />
          </Route>
          <Route path='/practiceReactJs/'>
            <Home />
          </Route>
          <Route path='/'>
            <Redirect to="/practiceReactJs/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
