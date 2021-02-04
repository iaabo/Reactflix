import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "react-bootstrap";
import WatchedMovie from "./WatchedMovie";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="container">
      <div className="row justify-content-md-center  m-3">
        {watchlist.length > 0 ? (
          <Button variant="danger">
            {watchlist.length}
            {watchlist.length === 1 ? " movie to watch" : " movies to watch"}
          </Button>
        ) : (
          ""
        )}
      </div>
      {watchlist.length > 0 ? (
        <div className="row justify-content-md-center">
          {watchlist.map((movie) => (
            <WatchedMovie movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <h1
          className="row justify-content-md-center  m-3"
          style={{ color: "#fff" }}
        >
          {`No Movies to watch :(`}
        </h1>
      )}
    </div>
  );
};

export default WatchList;
