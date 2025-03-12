import { useParams, Link } from "react-router-dom";

export default function Moviecard(props) {
  // Movie Object Destruct.
  const { id, title, director, image, abstract } = props.moviesProps;

  return (
    <div className="movie-card">
      <img
        src={
          image
            ? image
            : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        }
        alt={title}
        className="movie-img"
      />
      <h3>{title}</h3>
      <span>{director}</span>
      <p>{abstract}</p>
      <Link to={`/movies/${id}`}>
        <button>See More</button>
      </Link>
    </div>
  );
}
