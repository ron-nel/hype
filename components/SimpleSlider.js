
import React, { Component } from "react";
import "../static/style.css";
import "../static/style2.css";
import Slider from "react-slick";
import { ServerStyleSheet } from "styled-components";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
    	<React.Fragment>
    		<style jsx>{`
		      	.slide-bg{
		      		background-image: url("./static/phone.png");
		      		background-repeat: no-repeat;
		      		background-size: contain;
		      		height: 35rem;

		      	}

		      	.carousel-content{
		      		height: 30em;
		      		width: 15.5em;
		      		padding-left: 2em;
		      		padding-top: 3.9em;
		      		padding-bottom: 2em;
		      	}

            .carousel-indicator{
              padding-right: 10em;
              padding-top: 0em;
            }

            .carousel-indicators li {
              width: 10px;
              height: 10px;
              border-radius: 100%;
              background-color: gray;
            }
		      `}
		    </style>
         <div className="row">
           <div className="col-6">
            
           </div>
          <div className="col-6">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators carousel-indicator">
            <li className="active" data-slide-to="0" data-target="#carouselExampleFade" data-step="0"></li>
            <li data-slide-to="1" data-target="#carouselExampleFade" data-step="1">::before<h1>hello</h1></li>
            <li data-slide-to="2" data-target="#carouselExampleFade" data-step="2"></li>
            <li data-slide-to="3" data-target="#carouselExampleFade" data-step="3"></li>
            <li data-slide-to="4" data-target="#carouselExampleFade" data-step="4"></li>
          </ol>
          <div className="slide-bg">
            <div className="carousel-inner">
              <div className="carousel-item carousel-content active">
                <img src="../static/ink1.png" height="100%" width="100%"/>
              </div>
              <div className="carousel-item carousel-content">
                <img src="../static/ink2.png" height="100%" width="100%"/>
              </div>
              <div className="carousel-item carousel-content">
                <img src="../static/ink3.png" height="100%" width="100%"/>
              </div>
            </div>
          </div>
          
          </div>
        </div>
        </div>
          
    	</React.Fragment>
    );
  }
}

export default SimpleSlider;