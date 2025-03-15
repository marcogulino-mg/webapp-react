import {Link} from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link className="link" to="/"><h1 className="mb-0">Bool Books</h1></Link>
      <nav>
          <ul className="mb-0">
              <li>
                  <Link to="/movies/addmovie">
                      <button type="button" className="btn btn-primary">Add Movie</button>
                  </Link>
              </li>
              <li>
                  <Link to="/movies">
                      <button type="button" className="btn btn-primary">Movies</button>
                  </Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}
