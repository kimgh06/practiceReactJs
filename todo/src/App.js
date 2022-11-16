import React from 'react';
import Home from './Components/routes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch path='/'>
          <Home />
        </Switch>
      </Router>
    </>
  );
}

export default App;
