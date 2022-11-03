import React,{useState} from 'react';
import './oters.scss';

function OterButton({text}){
    const [a, setA] = useState(text);
    const [t, setT] = useState(false);
    return(
    <>
      <button onClick={()=>{
        if(t){
          setA("와");
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