import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Movie({ title, year, img, lang, summary, id }) {
  return (
    <>
      <li>
        {title} ({year})
        <ul>
          <Link to={`/movie/${id}`} title={`Go to see "${title}"`}>
            <img src={img} />
          </Link>
          <li>
            language : ({lang})
          </li>
          <li>
            summary : {summary}
          </li>
        </ul>
      </li>
    </>
  );
}

export default Movie;