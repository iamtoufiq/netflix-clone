import React from "react";
import "./Css/homescreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow
        fetchUrl={"/trending/movie/week"}
      />
      <Row title="Trending Now" fetchUrl={"/movie/top_rated"} />
      <Row title="Action Movie" fetchUrl={"/discover/movie"} />
      <Row
        title="Comedy Movies"
        fetchUrl="/discover/movie"
        end="?with_genres=35&sort_by=vote_average.desc&vote_count.gte=1000"
      />

      <Row title="Top Rated" fetchUrl={"/movie/top_rated"} />
      <Row
        title="Horror Movies"
        fetchUrl="/movie/top_rated"
        end="?language=en-US&with_genres=27"
      />
      <Row
        title="Romantic Movies"
        fetchUrl="/movie/top_rated"
        end="?language=en-US&with_genres=10749"
      />
    </div>
  );
};
export default HomeScreen;
