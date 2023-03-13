import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class SliderSection extends Component {
  state = {};
  render() {
    return (
        <div className="container-fluid">
          <Carousel className="container-fluid" variant="primry">
            <Carousel.Item>
              <img
                className="img-fluid img-thumbnail mx-auto d-block w-100"
                src={require("../assets/img1.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid img-thumbnail mx-auto d-block w-100"
                src={require("../assets/img2.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid img-thumbnail mx-auto d-block w-100"
                src={require("../assets/img3.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
}

export default SliderSection;
