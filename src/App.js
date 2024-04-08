import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=411a3c97123f0b6f3b5a2c3144baec8f&query=";
//411a3c97123f0b6f3b5a2c3144baec8f
// const movie1 = {
//   adult: false,
//   backdrop_path: "/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg",
//   genre_ids: [28, 878],
//   id: 557,
//   original_language: "en",
//   original_title: "Spider-Man",
//   overview:
//     "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
//   popularity: 81.47,
//   poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
//   release_date: "2002-05-01",
//   title: "Spider-Man",
//   video: false,
//   vote_average: 7.3,
//   vote_count: 18084,
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}${title}`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        console.log("No results found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Search</h1>

      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(s) => setSearchTerm(s.target.value)}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
