import React from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
const MovieCard = ({movie1}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.release_date}</p>
      </div>
      <div>
        <img src={IMG_URL + movie1.poster_path} alt="Movie Poster" />
      </div>
      <div>
        <h3>{movie1.title}</h3>
        <span>{"Rating : " + movie1.vote_average}</span>
      </div>
    </div>
  );
};
export default MovieCard;
