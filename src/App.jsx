import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT Pages
import Homepage from "./pages/Homepage";
import Moviespage from "./pages/Moviespage";
import Movie from "./pages/Movie";
import Notfound from "./pages/Notfound";
import Addmovie from "./pages/Addmovie.jsx";
// Layouts
import Layout from "./layouts/Baselayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route index Component={Homepage} />
          <Route path="/movies" Component={Moviespage} />
          <Route path="/movies/:id" Component={Movie} />
          <Route path="/movies/addmovie" Component={Addmovie}/>
          <Route path="*" Component={Notfound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;