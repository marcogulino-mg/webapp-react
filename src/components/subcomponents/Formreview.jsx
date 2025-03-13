export default function Formreview() {
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
  );
}
