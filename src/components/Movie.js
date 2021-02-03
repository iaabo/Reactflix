import React from "react";

const movie = (props) => {
  return (
    <div>
      <img src={props.posterUrl} alt="" />
      <button>Add to Favorites</button>
    </div>
  );
};

export default movie;
