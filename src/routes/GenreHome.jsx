import { useParams } from "react-router-dom";
import Page from "../components/Page";
function GenreHome(props) {
  let params = useParams();
  const fetchUrl = `https://api.jikan.moe/v4/anime/?genres=${params.genreId}`;
  return (
    <div>
      <Page url={fetchUrl} />
    </div>
  );
}

export default GenreHome;
