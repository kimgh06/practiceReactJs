import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ title, year, img, lang, summary, id, genres }) {
  return (
    <div id="Movie">
      <Link to={`/movie/${id}`} title={`Go to see more "${title}"`}>
        <img src={img} />
      </Link>
      <b>{title} ({year})</b>
      <ul>
        <li>
          language : ({lang})
        </li>
        <li>
          summary : {summary.length < 255 ? summary : `${summary.slice(0, 255)}...`}
        </li>
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf().isRequired,
};

export default Movie;