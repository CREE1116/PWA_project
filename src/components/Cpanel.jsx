import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Genres from "./Genres";

function Cpanel(props) {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.mal_id}</h3>
      <a href={data.url}>
        <LazyLoadImage src={data.images.webp.image_url} alt={data.title} />
      </a>
      <Genres data={data.genres} />
    </div>
  );
}

export default Cpanel;
