import React, { useEffect, useState } from "react";
import "./Css/banner.css";
import axios from "axios";
const API_KEY = "0ad8678b95be0416f369c5e931cba10b";
const BASE_URL = "https://api.themoviedb.org/3";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  function fetchData() {
    axios
      .get(`${BASE_URL}/trending/movie/week`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
        console.log(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__conent">
          <h1 className="banner__titile">
            {movie?.title || movie?.original_name || movie?.name}
          </h1>
          <div className="banner_buttons">
            <button>Play</button>
            <button>My List</button>
          </div>
          <div className="banner__description">
            <p>{movie?.overview}</p>
          </div>
        </div>
        <div className="banner-fade"></div>
      </div>
    </>
  );
};

export default Banner;
