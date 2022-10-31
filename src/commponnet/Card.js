import React, { useState } from "react";
import { Link } from 'react-router-dom'

import "../css/card.css"
function CardMovies({ movies }) {
  return (
    <div>
    <Link to={`/movie/"${movies.id}`}>
      <div className="cardd">
        <img src={`https://image.tmdb.org/t/p/w500/` + movies.poster_path} className="" />
        <div className="holder">
        </div>
        <div className="info">
          <p>اسم الفيلم : {movies.original_title}</p>
          <p>تاريخ الاصدار:{movies.release_date}</p>
          <p>عدد المقيمين: {movies.vote_count}</p>
          <p>التقييم:{movies.vote_average} </p>
        </div>
      </div>
      </Link>
    </div>
  );
}



export default CardMovies;