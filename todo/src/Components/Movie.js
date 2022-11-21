import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ title, year, img, lang, summary, id }) {
  return (
    <div className={`Movie ${id}`}>
      <Link to={`/movie/${id}`} title={`Go to see more "${title}"`}>
        <img src={img} />
      </Link>
      <div>
        <b>{title} ({year})</b>
        <ul>
          <li>
            language : ({lang})
          </li>
          <li>
            summary : {summary.length < 255 ? summary : `${summary.slice(0, 200)}...`}
          </li>
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