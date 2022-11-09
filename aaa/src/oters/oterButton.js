import React, { useState } from 'react';
import PropTypes from "prop-types";

OterButton.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};
function OterButton({ text, fontSize = 14, width = 200 }) {
  const [a, setA] = useState(text);
  const [t, setT] = useState(false);
  return (
    <div>
      <button className='Oterbutton' style={{
        fontSize: fontSize,
        width: width,
      }}
        onClick={() => {
          if (t) {
            setA("umm...");
          }
          else {
            setA(text);
          }
          setT((c) => !c);
        }}>{a}</button>
    </div>
  );
}
const oterText = () => {
  return (
    <></>
  );
}

export default OterButton;
export { oterText };