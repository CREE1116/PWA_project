import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>home</h1>
      <Link to={"/PWA_project/Manga/Recomend"}>Manga/Recomend</Link>
      <Link to={"/PWA_project/Anime/Recomend"}>Anime/Recomend</Link>
      <Link to={"/PWA_project/Anime/Home"}>Anime/home</Link>
    </div>
  );
}

export default Home;
