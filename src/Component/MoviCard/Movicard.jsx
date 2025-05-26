import { Link } from "react-router";
import "./movi-style.css";
import React from "react";

const Movicard = ({ movies }) => {
  return (
    
    <div className="movie_cards">
      <Link id="link" to={`/MovieDetail/${movies.id}`}>
        <img id="M_img" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
        {movies.tittle}
      </Link>
    </div>
      
  );
};

export default Movicard;
