import React, { useEffect, useState } from "react";
import "./body-style.css";
import Movicard from "../MoviCard/Movicard";
import { getMovies, searchMovies } from "../Logic/FetchData";
import { Link } from "react-router";

function Body() {
  const [search, setSearch] = useState("");
  const [moviee, setMoviee] = useState([]);
  let debounceTimer;
  //This functiom used to Get the intial Movie form the Aip
  useEffect(() => {
    const loadMovie = async () => {
      try {
        const popularmovies = await getMovies();
        setMoviee(popularmovies);
        console.log(popularmovies);
      } catch (e) {
        console.log(e);
      }
    };
    loadMovie();
  }, []);
  //#######################################################

  const handleSearch = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      console.log("Searching for:", search);
      const smovie = await searchMovies(search);
      setMoviee(smovie);
    }, 1500);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e); //Calling the function to get the search movie
  };

  return (
    <>
      <div className="body-top">
        <Link id="Link" to="/">
          <button id="b_btn">Home</button>
        </Link>
        <input
          id="h_search"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Live Search"
        />
      </div>
      <div className="body_main">
        {moviee
          .filter(
            (movie) =>
              movie.release_date &&
              new Date(movie.release_date).getFullYear() > 2000
          )
          .map((movie) => (
            <Movicard movies={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default Body;

