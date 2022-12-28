import React, { useState, useEffect } from "react";
import Cpanel from "../components/Cpanel";

function AnimeHome(props) {
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(0);
  const AnimeRecomend = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();
    setAnime(division(data.data, 5));
    console.log(anime);
    setLoading(false);
  };
  useEffect(() => {
    AnimeRecomend();
  }, []);
  const division = (array, n) => {
    const length = array.length;
    console.log("in division length", length);
    const divide =
      Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
    console.log("in divide", divide);
    const newArray = [];

    for (let i = 0; i < divide; i++) {
      // 배열 0부터 n개씩 잘라 새 배열에 넣기
      newArray.push(array.splice(0, n));
    }
    console.log(newArray);
    return newArray;
  };
  return (
    <div>
      {loading ? (
        <div>
          <span>loading</span>
        </div>
      ) : (
        <>
          <h1>anime home</h1>
          <ul>
            {anime[page].map((anime) => {
              console.log(anime);
              return (
                <li key={anime.mal_id}>
                  <Cpanel data={anime} />
                </li>
              );
            })}
          </ul>
          <ul>
            {anime.map((anime, index) => {
              return (
                <li key={index + 1} onClick={() => setPage(index)}>
                  <button>{index + 1}</button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default AnimeHome;
