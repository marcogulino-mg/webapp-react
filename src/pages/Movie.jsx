// IMPORT Components
import Review from "../components/subcomponents/Review";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Movie() {
  return (
    <>
      <div className="movie-details">
        <div className="details">
          <img
            src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            alt="movie image"
            className="movie-img"
          />
          <div>
            <h3>Title Card</h3>
            <span>Director Name</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quia
              quidem totam! Necessitatibus quam hic similique officia doloribus?
              Temporibus consectetur nisi deleniti accusamus amet velit nostrum
              alias et soluta sint!
            </p>
          </div>
        </div>
        <hr />
        <h3>Our community reviews</h3>
        <Review />
        <Review />
        <Review />
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
