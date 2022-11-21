import React, { useState, useEffect } from "react";
import Movie from "../Movie";
import '../Home.scss';

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
      <ul id="main">
        {loading ? <h2>Loading...</h2> : movies.map((i, n) =>
          <Movie key={i}
            id={i.id}
            title={i.title}
            year={i.slug.substr(-4,)}
            img={i.medium_cover_image}
            lang={i.language}
            summary={i.summary}
            genres={i.genres}
          />
        )}
      </ul>
    </>
  );
}

export default Home;