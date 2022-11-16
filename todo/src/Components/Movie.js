import React, { useState, useEffect } from "react";

function Movie() {
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
          <li key={i.id}>
            {i.title} ({i.slug.substr(-4,)})
            <ul>
              <a href={i.url} target='_blank' title={`Go to see "${i.title}"`}>
                <img src={i.medium_cover_image} />
              </a>
              <li>
                language : ({i.language})
              </li>
              <li>
                summary : {i.summary}
              </li>
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}

export default Movie;