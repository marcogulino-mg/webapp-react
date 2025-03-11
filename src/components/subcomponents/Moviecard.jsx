import { useParams } from "react-router-dom";

export default function Moviecard() {
  // Read ID from URL
  const { id } = useParams();

  return (
    <div className="movie-card">
      <img
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        alt="movie image"
        className="movie-img"
      />
      <h3>Title Card</h3>
      <span>Director Name</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quia
        quidem totam! Necessitatibus quam hic similique officia doloribus?
        Temporibus consectetur nisi deleniti accusamus amet velit nostrum alias
        et soluta sint!
      </p>
      <button>See More</button>
    </div>
  );
}
