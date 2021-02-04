import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchedMovie from "./WatchedMovie";


const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <h1>My Watchlist</h1>
      {watchlist.length > 0 ? (
        <span> 
          {watchlist.length}
          {watchlist.length === 1 ? " movie to watch" : " movies to watch"}
        </span>
      ) : (
        ""
      )}

      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((movie) => (
            <WatchedMovie movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <h1>No Movies to watch</h1>
      )}
    </div>
  );
};

export default WatchList;
