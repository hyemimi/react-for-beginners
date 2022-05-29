import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Details from "../components/Details";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <Details
            key={detail.id}
            medium_cover_image={detail.large_cover_image}
            rating={detail.rating}
            runtime={detail.runtime}
            year={detail.year}
            language={detail.language}
            title={detail.title}
            description_full={detail.description_full}
          ></Details>
        </div>
      )}
    </div>
  );
}

export default Detail;
