import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const a = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  }
  console.log(movie);
  useEffect(() => {
    a();
  }, []);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={movie.large_cover_image} />
        </div>
        <div>
          <Link to='/'>
            <button>Return to Home</button>
          </Link>
          <ul>
            <span>
              <h1>{movie.title_long}</h1>
            </span>
            <li>
              Description : "{movie.description_intro}"
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detail;