import { useParams } from "react-router-dom";

export default function Moviecard(props) {
  // Read ID from URL
  const { ID } = useParams();

  // Movie Object Destruct.
  const { title, director, image, abstract } = props.movieProps;

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
      <button>See More</button>
    </div>
  );
}
