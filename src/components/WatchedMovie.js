import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchedMovie = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?cs=srgb&dl=pexels-markus-spiske-2672097.jpg&fm=jpg";
        }}
        style={{ width: "200px", height: "300px" }}
      />
      <h1>{movie.title}</h1>
      <button onClick={() => removeMovieFromWatchlist(movie.id)}>Remove</button>
    </div>
  );
};

export default WatchedMovie;
