import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ title, year, img, lang, summary, id, genres }) {
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

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf().isRequired,
};

export default Movie;