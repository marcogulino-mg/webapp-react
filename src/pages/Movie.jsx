// IMPORT Components
import { useEffect, useState } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT Components
import Review from "../components/subcomponents/Review";

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
        if (err.status === 404) redirect("/*");
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
        <div className="container mt-4">
          <h4>Add your review</h4>
          <div className="card p-3">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  defaultValue="Anonymous"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Review</label>
                <textarea
                  className="form-control"
                  name="review"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Voto</label>
                <select className="form-control" name="voto">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
