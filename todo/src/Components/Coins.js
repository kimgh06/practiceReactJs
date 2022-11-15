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
      <h1>The Coins!</h1>
      {loading ? <b>Loading...</b> : ""}
      <ul>
        {coins.map((c, i) =>
          <li>{c.name} ({c.symbol}) : ${Math.ceil(c.quotes.USD.price * 100) / 100}</li>
        )}
      </ul>
    </>
  );
}

export default Coins;