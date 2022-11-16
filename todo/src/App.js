import React from 'react';
import Home from './Components/routes/Home';
import Detail from './Components/routes/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/movie'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
