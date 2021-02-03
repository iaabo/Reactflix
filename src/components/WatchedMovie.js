import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchedMovie = (movie) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div>
      <img src={movie.posterUrl} alt={movie.title} />
      <button onClick={() => removeMovieFromWatchlist(movie.id)}>Remove</button>
    </div>
  );
};

export default WatchedMovie;
