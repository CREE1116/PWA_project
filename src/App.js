import React from "react";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import MangaRecomend from "./routes/MangaRecomend";
import AnimeRecomend from "./routes/AnimeRecomend";
import AnimeHome from "./routes/AnimeHome";
import GenreHome from "./routes/GenreHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PWA_project" element={<Home />} />
        <Route path="/Manga/Recomend" element={<MangaRecomend />} />
        <Route path="/Anime/Recomend" element={<AnimeRecomend />} />
        <Route path="/Anime/genre/:genreId" element={<GenreHome />} />
        <Route path="/Anime/Home" element={<AnimeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
