import { useState } from "react";
import axios from "axios";

export default function Formreview(props) {
  // Empty review object
  const initReview = {
    name: "Anonymous",
    vote: 1,
    text: "",
  };

  // State Var
  const [review, setReview] = useState(initReview);

  // Update review
  function setReviewValues(e) {
    const { value, name } = e.target;
    setReview((currentReview) => ({ ...currentReview, [name]: value }));
  }

  // Submit Form
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/movies/${props.idMovie}`, review, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => setReview(initReview))
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <div className="container mt-4">
      <h4>Add your review</h4>
      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={review.name}
              onChange={setReviewValues}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea
              className="form-control"
              name="text"
              value={review.text}
              rows="3"
              onChange={setReviewValues}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Voto</label>
            <select
              className="form-control"
              name="vote"
              value={review.vote}
              onChange={setReviewValues}
            >
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
  );
}
