import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>home</h1>
      <Link to={"/anime"}>Anime</Link>
      <Link to={"/manga"}>Manga</Link>
    </div>
  );
}

export default Home;
