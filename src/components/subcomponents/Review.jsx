export default function Review(props) {
  const { name, vote, text } = props.movieProps;

  return (
    <div className="review-card">
      <h4>{text}</h4>
      <span>Vote {vote}</span>
      <span>By {name || "Anonymous"}</span>
    </div>
  );
}
