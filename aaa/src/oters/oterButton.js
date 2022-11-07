import React,{useState} from 'react';
import './oters.scss';

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