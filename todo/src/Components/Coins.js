import React, { useState, useEffect } from "react";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(r => r.json())
      .then(j => {
        setCoins(j);
        setLoading(false);
      }
      );
  }, []);
  const changeValue = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <h1>The Coins{loading ? " !!!" : ` : ${coins.length}`}</h1>
      {loading ? <b>Loading...</b> :
        <select onChange={changeValue}>
          {coins.map((c, i) =>
            <option value={Math.ceil(c.quotes.USD.price * 100) / 100} >{c.name} ({c.symbol}) : ${Math.ceil(c.quotes.USD.price * 100) / 100}</option>
          )}
        </select>
      }
      <p>${value}</p>
    </>
  );
}

export default Coins;