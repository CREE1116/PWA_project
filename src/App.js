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
        <Route path="/PWA_project/Manga/Recomend" element={<MangaRecomend />} />
        <Route path="/PWA_project/Anime/Recomend" element={<AnimeRecomend />} />
        <Route path="/PWA_project/Anime/genre/:genreId" element={<GenreHome />} />
        <Route path="/PWA_project/Anime/Home" element={<AnimeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
