import React, { useState, useEffect } from "react";

function Movie({ title, year, url, img, lang, summary, gernes }) {
  return (
    <>
      <li>
        {title} ({year})
        <ul>
          <a href={url} target='_blank' title={`Go to see "${title}"`}>
            <img src={img} />
          </a>
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