import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </footer>
  );
}
