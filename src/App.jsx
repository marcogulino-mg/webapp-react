import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
// IMPORT Pages
import Homepage from "./pages/Homepage";
import Moviespage from "./pages/Moviespage";
// Layouts
import Layout from "./layouts/Baselayout";
import Movie from "./components/subcomponents/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Homepage} />
          <Route path="/movies" Component={Moviespage} />
          <Route path="/movies/:id" Component={Movie} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
