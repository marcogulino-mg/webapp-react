import { useEffect, useState } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// IMPORT Components
import Review from "../components/subcomponents/Review";
import Formreview from "../components/subcomponents/Formreview";

export default function Movie() {
  // ID Movie
  const { id } = useParams();
  // State Var filled with a single Movie from API Call
  const [movie, setMovie] = useState({});
  // Redirect
  const redirect = useNavigate();

  // Function for Axios Call
  function fetchMovie() {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.log(err);
        if (err.status === 404) redirect("/404");
      });
  }

  useEffect(() => fetchMovie, []);

  return (
    <>
      <div className="movie-details">
        <div className="details">
          <img
            src={
              movie.image
                ? movie.image
                : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt={movie.title}
            className="details-img"
          />
          <div>
            <h3>{movie.title}</h3>
            <span>{movie.director}</span>
            <p>{movie.abstract}</p>
          </div>
        </div>
        <hr />
        <h3>Our community reviews</h3>
        {/* Reviews List */}
        {movie.reviews?.map((review) => (
          <Review key={review.id} movieProps={review} />
        ))}
        <Formreview idMovie={id} />
      </div>
    </>
  );
}
