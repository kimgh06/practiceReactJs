import React, { useState, useEffect } from "react";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(r => r.json())
      .then(j => {
        setCoins(j);
        setLoading(false);
      }
      );
  }, []);
  return (
    <>
      <h1>The Coins : {coins.length}</h1>
      {loading ? <b>Loading...</b> :
        <select>
          {coins.map((c, i) =>
            <option>{c.name} ({c.symbol}) : ${Math.ceil(c.quotes.USD.price * 100) / 100}</option>
          )}
        </select>
      }
    </>
  );
}

export default Coins;