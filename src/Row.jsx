import React, { useEffect, useState } from "react";
// const fetchUrl = "/discover/movie?api_key=YOUR_API_KEY &with_genres=35&sort_by=vote_average.desc&vote_count.gte=1000";
import "./Css/row.css";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "0ad8678b95be0416f369c5e931cba10b";
const Row = ({ isLargeRow, title, fetchUrl, end }) => {
  const [movie, setMovie] = useState([]);
  function fetchData() {
    axios
      .get(`${BASE_URL}${fetchUrl}${!!end ? end : ""}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie.map((curImg, ind) => {
          return (
            <img
              key={ind} // add key prop
              src={`https://image.tmdb.org/t/p/w500${curImg.poster_path}`} // fix URL and reference to poster_path
              alt=""
              className={`rowPoster ${isLargeRow && "largeImage"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
