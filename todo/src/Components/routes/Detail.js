import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const fetching = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  console.log(movie);
  useEffect(() => {
    fetching();
  });
  return (
    <>
      {loading ? <h1>Loading...</h1> :
        <div style={{ display: 'flex', margin: "-8px" }}>
          <div alt={`image of ${movie.title_long}`} title={`image of ${movie.title_long}`}>
            <img src={movie.large_cover_image} />
          </div>
          <div style={{ width: "45%", margin: "1em", }}>
            <Link to='/practiceReactJs/'>
              <button
                style={{
                  height: "5ch",
                  borderRadius: "3ch",
                  border: "none",
                  backgroundColor: "gold",
                  color: "#121212",
                }}
              ><b>Return to Home</b></button>
            </Link>
            <ul>
              <span>
                <h1>{movie.title_long}</h1>
              </span>
              <li>Genres :</li>
              <ul>
                {movie.genres && movie.genres.map((i, n) =>
                  <li>"{i}"</li>
                )}
              </ul>
              <li>
                Description : "{movie.description_intro}"
              </li>
            </ul>
          </div>
        </div>}
    </>
  );
}

export default Detail;