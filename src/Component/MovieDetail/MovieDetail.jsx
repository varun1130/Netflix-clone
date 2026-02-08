import React, { useEffect, useState } from "react";
import "./movieDetail.css";
import { Link } from "react-router";
import { useParams } from "react-router";
import { IdSearch } from "../Logic/FetchData";

const MovieDetail = () => {
  const [IdMovie, setIdmovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const Id = async () => {
      const idmovie = await IdSearch(id);
      const data = await idmovie.json();
      setIdmovie(data);
    };
    Id();
  }, []);
  console.log(IdMovie);
  return (
    <div id="MD_main">
      <>
        {IdMovie && (
          <>
            <h1 id="MD_tittle"> {IdMovie.title}</h1>
            <div id="MD_status">
              <h3 id="MD_h3">{IdMovie.release_date}</h3>
              <h3 id="MD_h3">{IdMovie.status}</h3>
            </div>
            <div id="content">
              <img
                id="MD_img"
                src={`https://image.tmdb.org/t/p/original/${IdMovie.poster_path}`}
                alt={IdMovie.title}
              />
              <div>
              <h4 id="MD_h4">{`Lang: ${IdMovie.spoken_languages[0].name}`}</h4>
              <h4 id="MD_h4">{`Type: ${IdMovie.genres[0].name}`}</h4>
              <h4 id="MD_h4">{`Orgin: ${IdMovie.origin_country}`}</h4>
              <h4 id="MD_h4">{`⭐${IdMovie.vote_average.toFixed(1)}`}</h4>
              <h4 id="MD_h4">{`🔍${IdMovie.popularity.toFixed(1)}`}</h4> 
              <br />
              <h2 id="MD_overview">OverView :</h2>
               <p style={{display:"inline"}} id ="MD_over">{IdMovie.overview}</p>
              <h4 id="MD_h4"> <a href={IdMovie.homepage} target="_blank"> HomePage </a></h4>
              </div>
            </div>
            
           
          </>
        )}
      </>
      {/* <button id="MD_btn">
        <Link id="MD_link" to="/Body">
          Back
        </Link>
      </button> */}
    </div>
  );
};

export default MovieDetail;
