import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./bootstrap.style.scss";

const slideInfo = [
  {
    image: "https://universemagazine.com/wp-content/uploads/2022/03/jwst_poster02.jpg",
    title: "James Webb Space Telescope",
    sub: "find the first galaxies that formed in the early universe and peer through dusty clouds to see stars",
  },
  {
    image: "https://images7.alphacoders.com/583/583269.jpg",
    title: "Galaxy",
    sub: "I like the night. Without the dark, we'd never see the stars.",
  },
  {
    image: "https://wallpaperaccess.com/full/353239.jpg",
    title: "Neil Armstrong",
    sub: "Shoot for the stars but if you happen to miss shoot for the moon instead",
  },
];

function BootstrapSlideShow() {
  return (
    <div>
      <Carousel fade>
        {slideInfo.map(({ image, title, sub }, index) => (
          <Carousel.Item className="imageFrame" key={index}>
            <img src={image} className="image1" alt="galaxy" />

            <Carousel.Caption className="caption">
              <h3>{title}</h3>
              <p>{sub}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BootstrapSlideShow;
