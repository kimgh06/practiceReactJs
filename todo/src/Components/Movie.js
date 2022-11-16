import React, { useState, useEffect } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then(r => r.json()).then(j => console.log(j));
  }, []);
  return (
    <>
      {loading ? <h1>Loading...</h1> : ""}
    </>
  );
}

export default Movie;