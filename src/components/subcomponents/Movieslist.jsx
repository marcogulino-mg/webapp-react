import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// IMPORT Components
import Moviecard from "./Moviecard";

export default function Movieslist() {
  // State Var filled with Movies from API Call
  const [movies, setMovies] = useState([]);

  // Function for Axios Call
  function fetchMovies() {
    axios
      .get("http://localhost:3000/movies/")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }

  // Start Axios Call when the state var "movies" changes
  useEffect(() => fetchMovies, []);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movieProps={movie} />
      ))}
    </div>
  );
}
