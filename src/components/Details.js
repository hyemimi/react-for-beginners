import "../components/Detail.css";
import { useHistory } from "react-router-dom";

function Details({
  id,
  medium_cover_image,
  rating,
  runtime,
  year,
  language,
  title,
  description_full,
}) {
  function onClick(e) {
    window.location.href = "/";
  }

  return (
    <div className="center">
      <button className="button" onClick={onClick}>
        돌아가기
      </button>
      <h1 className="h1-title">
        {title}({year})
      </h1>
      <img src={medium_cover_image} alt="no image" />
      <div className="box">
        <h2>평점 : {rating}</h2>

        <h2>개봉 : {year}년</h2>

        <h2>상영시간 : {runtime}분</h2>

        <h2>언어 : {language}</h2>
      </div>
      <p>
        <h3 id="description">{description_full}</h3>
      </p>
    </div>
  );
}

export default Details;
