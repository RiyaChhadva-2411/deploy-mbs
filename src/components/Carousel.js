import React, { Component } from "react";
import money from "../svg/money.svg";
import moneypot from "../svg/moneypot.svg";
import screen from "../svg/screen.svg";
import hands from "../svg/hands.svg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";
import "./Carousel.css"
export default class CarouselClass extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuid(),
      content: 
      <div className="container"> 
        <div className="cards">
          <div className="circle">
            <span className="num">1</span>
          </div>
          <div className="rect">
            <div className="rect_small">
              <div className="Cards_col-1">
                <img src={money} alt="1" />
              </div>
              <div className="Cards_col-2">
                <span className="Text">To provide financial support to the members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
,
    },
    {
      key: uuid(),
      content: 
      <div className="container"> 
        <div className="cards">
          <div className="circle">
            <span className="num">2</span>
          </div>
          <div className="rect">
            <div className="rect_small">
              <div className="Cards_col-1">
                <img src={moneypot} alt="2" />
              </div>
              <div className="Cards_col-2">
                <span className="Text">To provide the habit of thrift amongst the members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    },
    {
      key: uuid(),
      content: 
      <div className="container"> 
      <div className="cards">
        <div className="circle">
          <span className="num">3</span>
        </div>
        <div className="rect">
          <div className="rect_small">
            <div className="Cards_col-1">
              <img src={screen} alt="3" />
            </div>
            <div className="Cards_col-2">
              <span className="Text">To encourage financial planning amongst the members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     },
    {
      key: uuid(),
      content: <div className="container"> 
      <div className="cards">
        <div className="circle">
          <span className="num">4</span>
        </div>
        <div className="rect">
          <div className="rect_small">
            <div className="Cards_col-1">
              <img src={hands} alt="4" />
            </div>
            <div className="Cards_col-2">
              <span className="Text">To support the activites of NIMA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    console.log(this.state.config);
    return (
      <div
        // className="row"
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
