import React from "react";
import { Link } from "react-router-dom";

function Genres(props) {
  const { data } = props;
  console.log("in Genres data", data);

  return data === undefined ? null : (
    <div>
      <ul>
        {data.map((genre) => {
          return (
            <li key={genre.mal_id}>
              <Link to={`/anime/genre/${genre.mal_id}`}>{genre.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Genres;
