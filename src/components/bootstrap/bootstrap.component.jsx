import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./bootstrap.style.scss";

function BootstrapSlideShow() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="imageFrame">
          <img src="https://universemagazine.com/wp-content/uploads/2022/03/jwst_poster02.jpg" className="image1" />

          <Carousel.Caption className="caption">
            <h3>james webb space telescope</h3>
            <p>find the first galaxies that formed in the early universe and peer through dusty clouds to see stars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imageFrame">
          <img src="https://images7.alphacoders.com/583/583269.jpg" className="image1 " />

          <Carousel.Caption className="caption">
            <h3>Galaxy</h3>
            <p>I like the night. Without the dark, we'd never see the stars.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imageFrame">
          <img src="https://wallpaperaccess.com/full/353239.jpg" className="image1" />

          <Carousel.Caption className="caption">
            <h3>Neil Armstrong</h3>
            <p>Shoot for the stars but if you happen to miss shoot for the moon instead</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapSlideShow;
