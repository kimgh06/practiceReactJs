import React,{useState} from 'react';
import Oters from './oters/Oters';
import OterButton, {oterText} from './oters/oterButton';

function App() {
  return(<>
  <Oters/>
  <OterButton text="321" fontSize={20}/>
  <OterButton text="318977" />
  </>
  );
}

export default App;
