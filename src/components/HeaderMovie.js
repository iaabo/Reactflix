import React from "react";
import { Carousel } from "react-bootstrap";
import movie3 from "../assets/movie3.jpg";
import movie2 from "../assets/movie2.jpg";
import movie4 from "../assets/movie4.jpg";

const HeaderMovie = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={movie4}
            alt="First slide"
           
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={movie2}
            alt="Third slide"
           
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={movie3}
            alt="Third slide"
            
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderMovie;
