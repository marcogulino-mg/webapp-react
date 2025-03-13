import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Formreview() {
  // Empty review object
  const initReview = {
    name: "",
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

  return (
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
              onChange={setReviewValues}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea
              className="form-control"
              name="text"
              rows="3"
              onChange={setReviewValues}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Voto</label>
            <select
              className="form-control"
              name="vote"
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
