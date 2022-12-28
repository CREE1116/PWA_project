import React, { useState, useEffect } from "react";
import Entry from "../components/Entry";

function MangaRecomend(props) {
  const [loading, setLoading] = useState(true);
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(0);
  const MangaRecomend = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/recommendations/manga"
    );
    const data = await response.json();
    setManga(division(data.data, 5));
    console.log(manga);
    setLoading(false);
  };
  useEffect(() => {
    MangaRecomend();
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
          <h1>manga home</h1>
          <ul>
            {manga[page].map((manga) => {
              console.log(manga);
              return (
                <li key={manga.mal_id}>
                  <Entry data={manga} />
                </li>
              );
            })}
          </ul>
          <ul>
            {manga.map((manga, index) => {
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

export default MangaRecomend;
