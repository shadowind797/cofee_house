import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import MainImages from "./mainImages";
import Footer from "./footer";
import DownloadBtns from "./downloadBtns";
import Img from "./imgs";
import cofeeCup from "../img/coffee-cup.svg";
import sliderImg_1 from "../img/coffee-slider-1.png";
import sliderImg_2 from "../img/coffee-slider-2.png";
import sliderImg_3 from "../img/coffee-slider-3.png";
import iphoneImg from "../img/mobile-screens.png";
import Slider from "./slider";

class Home extends React.Component {
  componentDidMount() {
    const $slider = document.getElementById("slider");
    if ($slider) {
      const slider = new Slider($slider, {
        loop: true,
        autoplay: false,
        interval: 5000,
        pauseOnHover: true,
        refresh: true,
        swipe: true,
      });
    }
  }
  render() {
    return (
      <>
        <header id="header">
          <Header />
        </header>
        <main className="container">
          <div id="mainDiv" className="container">
            <div>
              <h1>
                <span>Enjoy</span> premium coffee at our charming cafe
              </h1>
            </div>
            <p>
              With its inviting atmosphere and delicious coffee options, the
              Coffee House Resource is a popular destination for coffee lovers
              and those seeking a warm and inviting space to enjoy their
              favorite beverage.
            </p>
            <Link to="/menu">
              <button>
                Menu{" "}
                <img
                  src={cofeeCup}
                ></img>
              </button>
            </Link>
          </div>
          <h2>
            Choose your <span>favorite</span> cofee
          </h2>
          <div id="carousel">
            <div className="container">
              <div
                className="slider_style"
                data-slider="chiefslider"
                data-infinite="false"
                data-autoplay="false"
                id="slider"
              >
                <div className="slider__container">
                  <div className="slider__wrapper">
                    <div className="slider__items">
                      <div className="slider__item">
                        <div className="slider__item-container">
                          <div className="slider__item-content">
                            <div id="slider-img-1">
                              <Img img={sliderImg_1} />
                            </div>
                            <div id="slider-text">
                              <h5>S'mores Frappuccino</h5>
                              <p>
                                This new drink takes an espresso and mixes it
                                with brown sugar and cinnamon before being
                                topped with oat milk.
                              </p>
                              <h4>$5.50</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__item-container">
                          <div className="slider__item-content">
                            <div id="slider-img-1">
                              <Img img={sliderImg_2} />
                            </div>
                            <div id="slider-text">
                              <h5>Caramel Macchiato</h5>
                              <p>
                                Fragrant and unique classic espresso with rich
                                caramel-peanut syrup, with cream under whipped
                                thick foam.
                              </p>
                              <h4>$5.00</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__item-container">
                          <div className="slider__item-content">
                            <div id="slider-img-1">
                              <Img img={sliderImg_3} />
                            </div>
                            <div id="slider-text">
                              <h5>Ice coffee</h5>
                              <p>
                                A popular summer drink that tones and
                                invigorates. Prepared from coffee, milk and ice.
                              </p>
                              <h4>$4.50</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="slider__control" data-slide="prev"></a>
                <a href="#" className="slider__control" data-slide="next"></a>
                <ol className="slider__indicators">
                  <li data-slide-to="0"></li>
                  <li data-slide-to="1"></li>
                  <li data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
          <p id="about" className="container">
            Resource is <span>the perfect and cozy place</span> where you can
            enjoy a variety of hot beverages, relax, catch up with friends, or
            get some work done.
          </p>
          <div id="images">
            <MainImages />
          </div>
          <div className="container" id="download-div">
            <div id="download-info">
              <h3>
                <span>Download</span> our apps to start ordering
              </h3>
              <p>
                Download the Resource app today and experience the comfort of
                ordering your favorite coffee from wherever you are
              </p>
              <div id="download">
                <DownloadBtns />
              </div>
            </div>
            <div id="iphoneImg">
              <Img img={iphoneImg} />
            </div>
          </div>
        </main>
        <footer className="container" id="ftPlace">
          <Footer />
        </footer>
      </>
    );
  }
}

export default Home;
