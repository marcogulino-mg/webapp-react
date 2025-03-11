import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
// IMPORT Pages
import Homepage from "./pages/Homepage";
import Movieslist from "./pages/Movieslist";
// Layouts
import Layout from "./layouts/Baselayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Homepage} />
          <Route path="/movies" Component={Movieslist} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
