import React,{useState} from 'react';
import './App.scss';
import Oters from './oters/Oters';
import OterButton, {oterText} from './oters/oterButton';

function App() {
  return(<>
  <Oters/>
  <OterButton text="321" fontSize={20}/>
  </>
  );
}

export default App;
