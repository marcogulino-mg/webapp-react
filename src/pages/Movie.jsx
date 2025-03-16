import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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

  // Function for Average Votes Calc
  function calculateAverageVote(reviews) {
    if (!reviews || reviews.length === 0) return "No votes yet";

    const totalVotes = reviews.reduce((acc, review) => acc + review.vote, 0);
    return parseFloat((totalVotes / reviews.length).toFixed(1));
  }

  // Function that converts average votes in stars
  function numToStars() {
    const numStars = calculateAverageVote(movie.reviews);
    let tagsIcon = [];
    let i = 0

    if (numStars === "No votes yet") return numStars;

    for (i; i < Math.floor(numStars); i++) {
      tagsIcon.push(<FontAwesomeIcon key={i} className="stars" icon={faStar} />)
    }
    if (numStars % 1 !== 0) tagsIcon.push(<FontAwesomeIcon key={i} className="stars clip-stars" icon={faStar} />)

    return tagsIcon;
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
        <div className="vote-average">
          <h3>Our community reviews</h3>
          <h3>Average Vote: { numToStars() < 1 ? "No Reviews Available" : numToStars() }</h3>
        </div>
        {/* Reviews List */}
        {movie.reviews?.map((review) => (
          <Review key={review.id} movieProps={review} />
        ))}
        <Formreview idMovie={id} />
      </div>
    </>
  );
}
