import React,{useState} from 'react';
import PropTypes from "prop-types";
import './App.scss';
import Oters from './oters/Oters';
import OterButton, {oterText} from './oters/oterButton';


OterButton.propTypes = {
  text:PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};
function App() {
  return(<>
  <Oters/>
  <OterButton text="321" fontSize={20}/>
  <OterButton text="31" />
  </>
  );
}

export default App;
