import React from "react";
import { Carousel } from "react-bootstrap";
import movie1 from "../assets/movie3.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie4.jpg";
import movie4 from "../assets/movie6.jpg";
import movie5 from "../assets/movie7.jpg";


const HeaderMovie = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={movie3} alt="First slide" />
          <Carousel.Caption>
            <p style={{ backgroundColor: "#DD3444" , borderRadius: "8px", padding: "7px"}}>
              Search for your favourite genre!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={movie2} alt="Third slide" />
          <Carousel.Caption>
            <p style={{ backgroundColor: "#DD3444" , borderRadius: "8px", padding: "7px"}}>
             See the info about the movie.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={movie1} alt="Third slide" />
          <Carousel.Caption>
            <p style={{ backgroundColor: "#DD3444" , borderRadius: "8px", padding: "7px"}}>
             Add the movie to your watchlist.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={movie4} alt="Third slide" />
          <Carousel.Caption>
            <p style={{ backgroundColor: "#DD3444" , borderRadius: "8px", padding: "7px"}}>
              Keep track of the movies you want to watch.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={movie5} alt="Third slide" />
          <Carousel.Caption>
            <p style={{ backgroundColor: "#DD3444" , borderRadius: "8px", padding: "7px"}}>
              Delete them when you already saw them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderMovie;
