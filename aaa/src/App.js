import React,{useEffect} from 'react';
import Oters from './oters/Oters';
import OterButton, {oterText} from './oters/oterButton';

function App() {
  useEffect(()=>{
    console.log("반갑습네다.");
  },[]);
  return(<>
  <Oters/>
  <OterButton text="321" fontSize={20}/>
  <OterButton text="318977" />
  </>
  );
}

export default App;
