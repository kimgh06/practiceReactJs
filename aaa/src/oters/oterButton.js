import React,{useState} from 'react';
import './oters.scss';
import PropTypes from "prop-types";

OterButton.propTypes = {
    text:PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
  };
function OterButton({text, fontSize = 14}){
    const [a, setA] = useState(text);
    const [t, setT] = useState(false);
    return(
    <>
      <button style={{
          fontSize: fontSize,
      }} 
      onClick={()=>{
        if(t){
          setA("와 샌즈");
        }
        else{
          setA(text);
        }
        setT((c)=>!c);
        }}>{a}</button>
    </>
  );
}
const oterText = ()=>{return(
    <></>
);}

export default OterButton;
export {oterText};