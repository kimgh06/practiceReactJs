import React, { useState, useEffect } from "react";

function Coins() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(r => r.json()).then(j => console.log(j));
  }, []);
  return (
    <>
      <h1>The Coins!</h1>
      {loading ? <b>Loading...</b> : ""}
    </>
  );
}

export default Coins;