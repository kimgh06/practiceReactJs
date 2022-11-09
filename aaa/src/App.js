import React from 'react';
import Oters from './oters/Oters';
import OterButton from './oters/oterButton';
import Search from './oters/Search';
import './App.scss';

function App() {
  return (<>
    <Oters />
    <OterButton text="321" fontSize={20} />
    <OterButton text="318977" />
    <Search search="search here." />
  </>
  );
}

export default App;
