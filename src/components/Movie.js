import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Movie = (movie) => {
  
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  //disable button
  const watchlistDisabled = storedMovie ? true : false;
  
  return (
    <div>
      <img src={movie.posterUrl} alt={movie.title} />
      <button
        className="btn"
        disabled={watchlistDisabled}
        onClick={() => addMovieToWatchlist(movie)}
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default Movie;
