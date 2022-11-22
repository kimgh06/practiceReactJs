import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ title, year, img, lang, summary, id }) {
  return (
    <div className={`Movie ${id}`}>
      <Link to={`/practiceReactJs/movie/${id}`} title={`Go to see more "${title}"`}>
        <img src={img} />
      </Link>
      <div>
        <h2>{title} ({year})</h2>
        <ul>
          {lang === "" ? "" :
            <li>
              language : ({lang})
            </li>
          }
          {summary === "" ? "" :
            <li>
              summary : {summary.length < 255 ? summary : `${summary.slice(0, 180)}...`}
            </li>
          }
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;