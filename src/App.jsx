import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
// IMPORT Pages
import Homepage from "./pages/Homepage";
import Movieslist from "./pages/Movieslist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/movies" Component={Movieslist} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
