import React, { useState, useEffect } from "react";
import Movie from "../Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <>
      <h1>Movies</h1>
      <ul>
        {loading ? <h1>Loading...</h1> : movies.map((i, n) =>
          <Movie key={i}
            title={i.title}
            year={i.slug.substr(-4,)}
            url={i.url}
            img={i.medium_cover_image}
            lang={i.lang}
            summary={i.summary}
          />
        )}
      </ul>
    </>
  );
}

export default Home;