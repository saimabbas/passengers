import React, { useState, useRef, useEffect } from "react";
import Logo from "./../assets/img/Passengers.png";
import Mute from "../assets/icons/Mute";
import UnMute from "../assets/icons/UnMute";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import { Swiper, SwiperSlide } from "swiper/react";
import BackAudio from "../assets/audio/Passengers-coming-soon.ogg";
import "swiper/css";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css/navigation";
import { Accordion } from "react-bootstrap";
import PassengerSwiperImg from "../assets/img/passengersswiper.png";
import PassengersBg from "../assets/img/passengers-bg.png";
import PassengersFooterBg from "../assets/img/passengers-bottom-bg-img.png";
import PassengersHeaderBg from "../assets/img/passengers-header-bg.png";
import Planet1 from "../assets/img/Planets/planet-1.svg";
import Planet2 from "../assets/img/Planets/planet-2.svg";
import Planet3 from "../assets/img/Planets/planet-3.svg";
import Planet4 from "../assets/img/Planets/planet-4.svg";
import Planet5 from "../assets/img/Planets/planet-5.svg";
import Planet6 from "../assets/img/Planets/planet-6.svg";
import Planet7 from "../assets/img/Planets/planet-7.svg";
import Planet8 from "../assets/img/Planets/planet-8.svg";
import Planet9 from "../assets/img/Planets/planet-9.svg";
import Planet10 from "../assets/img/Planets/planet-10.svg";
import missile from "../assets/img/Planets/missile.svg";
import PassengersHeaderMobBg from "../assets/img/passengermobheader.png";
import PassengersHeroMountains from "../assets/img/passengers-hero-mountains.png";
import PassengerTeam from "../assets/img/passengersteam.png";
import { MdExpandMore } from "react-icons/md";
import Menu from "../assets/icons/Menu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Power1,
  Power2,
  Power3,
  Power4,
  Linear,
  Back,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { SplitText } from "gsap/SplitText";
const Passengers = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const ad = useRef();
  const pauseAudio = () => {
    setIsAudioPlaying(false);
    ad.current.pause();
  };
  const playAudio = () => {
    setIsAudioPlaying(true);
    ad.current.play();
  };

  useEffect(() => {
    const passengersHeading = new SplitText(".passengers-heading", {
      type: "chars",
    });
    const passengersHeadingChars = passengersHeading.chars;

    const roadmapSH = new SplitText(".roadmap-sh", {
      type: "chars",
    });
    const roadmapSHChars = roadmapSH.chars;
    const sneakPeekSh = new SplitText(".sneak-peek-sh", {
      type: "chars",
    });
    const sneakPeekShChars = sneakPeekSh.chars;
    const teamSh = new SplitText(".team-sh", {
      type: "chars",
    });
    const teamShChars = teamSh.chars;
    const faqSh = new SplitText(".faq-sh", {
      type: "chars",
    });
    const faqShChars = faqSh.chars;
    const aboutSH = new SplitText(".about-sh", {
      type: "chars",
    });
    const aboutSHChars = aboutSH.chars;
    const aboutP = new SplitText(".passengersaboutus p", {
      type: "lines",
    });
    const aboutPLines = aboutP.lines;

    var roadmapSHANim = gsap.timeline({
      scrollTrigger: {
        trigger: ".passengers-roadmap",
        start: "top 95%",
      },
    });
    roadmapSHANim.fromTo(
      roadmapSHChars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.35,
        stagger: {
          repeat: 2,
          each: 0.05,
          from: "random",
        },
      }
    );
    var sneakPeekSH = gsap.timeline({
      scrollTrigger: {
        trigger: ".sneak-peek-sh",
        start: "top 95%",
      },
    });
    sneakPeekSH
      .fromTo(
        sneakPeekShChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        }
      )
      .fromTo(
        ".passengerslide",
        {
          y: "100%",
        },
        {
          y: 0,
          ease: Back.easeInOut,
          duration: 1,
          stagger: {
            repeat: 0,
            each: 0.025,
            from: "random",
            yoyo: true,
          },
        },
        "<0"
      );

    var teamAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-sh",
        start: "top 95%",
      },
    });
    teamAnim
      .fromTo(
        teamShChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        }
      )
      .fromTo(
        ".ptgmainbox",
        {
          opacity: 0,
          y: "100%",
        },
        {
          opacity: 1,
          y: "0%",
          ease: Back.easeInOut,
          duration: 1.5,
          stagger: {
            each: 0.025,
            from: "random",
            yoyo: true,
          },
        },
        "<0"
      );
    var faqShAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-sh",
        start: "top 95%",
      },
    });
    faqShAnim
      .fromTo(
        faqShChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        }
      )
      .fromTo(
        ".fpfquest",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        },
        "<0"
      );
    var aboutSHAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sh",
        start: "top 95%",
      },
    });
    aboutSHAnim
      .fromTo(
        aboutSHChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        }
      )
      .fromTo(
        aboutPLines,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        },
        "<0"
      )
      .fromTo(
        ".passaboutusbtn button",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        },
        "<0"
      );
    let PLandingAnim = gsap.timeline();
    PLandingAnim.fromTo(
      ".pcircle-box",
      {
        transform: "translate(-100%, -50%)",
      },
      {
        transform: "translate(100%, -50%)",
        duration: 5,
      }
    )
      .fromTo(
        ".pcircle",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.15,
        },
        "<0.9"
      )
      .fromTo(
        ".passengers-loading-screen",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 1.5,
        },
        "<0.25"
      )
      .fromTo(
        passengersHeadingChars,
        {
          y: 150,
        },
        {
          y: 0,
          duration: 0.75,
        },
        "<0.5"
      )
      .fromTo(
        passengersHeadingChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        },
        "<0"
      )
      .fromTo(
        ".passengers-header-bg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          repeat: 2,
        },
        "<0"
      )
      .fromTo(
        ".volumeicons",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          repeat: 1,
        },
        "<0"
      )
      .fromTo(
        ".passengers-hero-planet-left",
        {
          transform: "translate(-100%, 0)",
        },
        {
          transform: "translate(-50%, 0)",
          duration: 0.75,
        },
        "<0"
      )
      .fromTo(
        ".passengers-hero-planet-right",
        {
          transform: "translate(100%, 0)",
        },
        {
          transform: "translate(50%, 0)",
          duration: 0.75,
        },
        "<0"
      )
      .fromTo(
        ".passengers-hero-mountains",
        {
          opacity: 0,
          y: "100%",
        },
        {
          opacity: 1,
          y: "0",
          duration: 0.75,
        },
        "<0"
      )
      .fromTo(
        ".passengerheaderleft ul li",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          stagger: {
            repeat: 2,
            each: 0.05,
            from: "random",
          },
        },
        "<0.15"
      )
      .fromTo(
        ".passengerheaderleft > img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          repeat: 2,
        },
        "<0.25"
      )
      .fromTo(
        ".passengersicons .pibox",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          opacity: 1,
          y: "0",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        },
        "<0"
      )
      .fromTo(
        ".passengerscomingsoon",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
          repeat: 1,
        },
        "<0"
      )
      .fromTo(
        ".passengers-loading-screen",
        {
          transform: "translate(0%, 0)",
        },
        {
          transform: "translate(200%, 0)",
          duration: 0.01,
        }
      );
  }, []);

  return (
    <div className="app light-theme">
      <div className="passengerpage">
        <div className="passengers-loading-screen">
          <div className="pcircle">
            <div className="pcircle-box">
              <div className="pcircle-dark-1"></div>
              <div className="pcircle-light-1"></div>
              <div className="pcircle-dark-2"></div>
              <div className="pcircle-light-2"></div>
              <div className="pcircle-dark-3"></div>
            </div>
          </div>
        </div>
        <div className="passengermain">
          <img
            className="passengers-bg"
            src={PassengersBg}
            alt="PassengersBg"
          />
          <img
            className="passengers-footer-bg"
            src={PassengersFooterBg}
            alt="PassengersFooterBg"
          />
          <img
            className="passengers-header-bg"
            src={PassengersHeaderBg}
            alt="PassengersBg"
          />
          <img
            className="passengers-header-mob-bg"
            src={PassengersHeaderMobBg}
            alt="PassengersBg"
          />
          <div className="passengersmain-content">
            <div className="passengersheaderhero">
              <img
                className="passengers-hero-mountains"
                src={PassengersHeroMountains}
                alt="PassengersHeroMountains"
              />
              <img
                className="passengers-hero-planet-left"
                src={Planet6}
                alt="PassengersBg"
              />
              <img
                className="passengers-hero-planet-right"
                src={Planet3}
                alt="PassengersBg"
              />
              {/* <img className="planet-1" src={Planet3} alt="Planet1" /> */}
              <header className="passengerheader">
                <div className="passengerheaderleft">
                  <img src={Logo} alt="Passengers Logo" />
                  <ul>
                    <li>
                      <a href="#">
                        <b>T</b>he Whitelist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <b>R</b>oadmap
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <b>S</b>neak peeks
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <b>T</b>he team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <b>A</b>bout us
                      </a>
                    </li>
                    <li className="faqnomarg">
                      <a href="#">
                        <b>F</b>aq
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="passengerheaderright">
                  <div className="volumeicons">
                    <audio ref={ad} className="back-audio" src={BackAudio} />
                    {isAudioPlaying ? (
                      <button onClick={pauseAudio}>
                        <Mute color="#fff" />
                      </button>
                    ) : (
                      <button
                        className="passengers-audio-active-btn"
                        onClick={pauseAudio}
                      >
                        <Mute color="#fff" />
                      </button>
                    )}

                    {isAudioPlaying ? (
                      <button
                        className="passengers-audio-active-btn"
                        onClick={playAudio}
                      >
                        <UnMute color="#fff" />
                      </button>
                    ) : (
                      <button onClick={playAudio}>
                        <UnMute color="#fff" />
                      </button>
                    )}
                  </div>
                  <div className="passengersheadermob">
                    <Menu color="#fff" />
                  </div>
                  <button className="passengerscomingsoon">
                    <b>Mint </b> (Coming Soon)
                  </button>
                </div>
              </header>
              <div className="box">
                <div className="passengershero">
                  <h3 className="conthrax passengers-heading">Passengers</h3>
                  <div className="passengersicons">
                    <div className="pibox">
                      <Discord color="#fff" />
                    </div>
                    <div className="pibox">
                      <TwitterIcon color="#fff" />
                    </div>
                    <div className="pibox">
                      <Instagram color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="passengers-roadmap">
              <div className="box">
                <h2 className="passengers-section-heading roadmap-sh">
                  ROADMAP AND UTILITY
                </h2>
                <h3 className="roadmap-comingsoon">- Coming Soon -</h3>
                {/* <div className="proadmap-container">
                  <div className="proadmap-center-line-box">
                    <div className="proadmap-center-line-box-top">
                      <div></div>
                      <div></div>
                    </div>
                    <div className="proadmap-center-line-box-bottom">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-1">
                    <div className="proadmap-box-number">
                      <span>01</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-2">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>02</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-3">
                    <div className="proadmap-box-number">
                      <span>03</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-4">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>04</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-5">
                    <div className="proadmap-box-number">
                      <span>05</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-6">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>06</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-7">
                    <div className="proadmap-box-number">
                      <span>07</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-8">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>08</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-9">
                    <div className="proadmap-box-number">
                      <span>09</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-10">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>10</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-11">
                    <div className="proadmap-box-number">
                      <span>11</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-12">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>12</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-13">
                    <div className="proadmap-box-number">
                      <span>13</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-14">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>14</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-15">
                    <div className="proadmap-box-number">
                      <span>15</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-right proadmap-box-16">
                    <div className="proadmap-box-text-con">
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG2} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                      <span></span>
                    </div>
                    <div className="proadmap-box-number">
                      <span>16</span>
                    </div>
                  </div>
                  <div className="proadmap-box proadmap-box-left proadmap-box-17">
                    <div className="proadmap-box-number">
                      <span>17</span>
                    </div>
                    <div className="proadmap-box-text-con">
                      <span></span>
                      <div className="proadmap-box-text-con-box">
                        <img src={PBG1} alt="PBG1" />
                        <h4>THE WHITELIST OPENS FOR SEASON 1</h4>
                        <p>Get your season 1 pass with The Whitelist here.</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="passengersswiper sneak-peek-sh">
              <p>Passengers Sneak Peek</p>

              <div className="passengersmainswiper">
                <Swiper
                  className="mySwiper"
                  spaceBetween={25}
                  modules={[FreeMode]}
                  slidesPerView={5.5}
                  centeredSlides={true}
                  loop={true}
                  freeMode={true}
                >
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="passengerslide">
                      <img src={PassengerSwiperImg} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="box">
              <div className="passengersteam">
                <h6>Meet the</h6>
                <h5 className="team-sh">Passengers team</h5>
                <div className="passengersteamgrid">
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                  <div className="ptgmainbox">
                    <img src={PassengerTeam} alt="" />
                    <p>Serge Klassen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="passengersfaq">
                <h3 className="faq-sh">Frequently asked questions</h3>

                <div className="pfaqbox">
                  <Accordion>
                    <Accordion.Item eventKey={1}>
                      <Accordion.Header>
                        <div className="fpfquest">
                          <div className="fpfqleft">
                            <span>01</span>
                            <p>What will the Mint price for Passengers be?</p>
                          </div>
                          <div className="fpfqright">
                            <MdExpandMore />
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="fpfans">
                          <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat repellendus molestias voluptatum quis
                            nihil ad, perspiciatis autem labore libero,
                            obcaecati pariatur ipsum nemo distinctio molestiae?
                          </h6>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={2}>
                      <Accordion.Header>
                        <div className="fpfquest">
                          <div className="fpfqleft">
                            <span>02</span>
                            <p>Does passengers have social media?</p>
                          </div>
                          <div className="fpfqright">
                            <MdExpandMore />
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="fpfans">
                          <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat repellendus molestias voluptatum quis
                            nihil ad, perspiciatis autem labore libero,
                            obcaecati pariatur ipsum nemo distinctio molestiae?
                          </h6>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={3}>
                      <Accordion.Header>
                        <div className="fpfquest">
                          <div className="fpfqleft">
                            <span>03</span>
                            <p>How do i get in contact with Passengers?</p>
                          </div>
                          <div className="fpfqright">
                            <MdExpandMore />
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="fpfans">
                          <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat repellendus molestias voluptatum quis
                            nihil ad, perspiciatis autem labore libero,
                            obcaecati pariatur ipsum nemo distinctio molestiae?
                          </h6>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={4}>
                      <Accordion.Header>
                        <div className="fpfquest">
                          <div className="fpfqleft">
                            <span>04</span>
                            <p>When will the whole collection be reviled?</p>
                          </div>
                          <div className="fpfqright">
                            <MdExpandMore />
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="fpfans">
                          <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat repellendus molestias voluptatum quis
                            nihil ad, perspiciatis autem labore libero,
                            obcaecati pariatur ipsum nemo distinctio molestiae?
                          </h6>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="passengersaboutus">
                <h6 className="about-sh">About us</h6>
                <p>
                  Passengers is and NFT collection made by lovers of space, for
                  lovers of space. The goal with Passengers is to give as much
                  back to <br /> its holders as possible. With industry leading
                  utility, while providing amazing art. One lucky winner will
                  get a chance to fly with Virgin Galactic and <br /> be with
                  the stars in a way we only dreamed of when we were young. In
                  addition to our Prize pools, we have Yield farming dividends,
                  Minting royalties and a <br /> bunch more stuff to look
                  forward to. Any other questions? P <br /> lease reach out to
                  us on socials or by email. Looking forward to launch and{" "}
                  <br /> remember.. don't forget to look up.{" "}
                </p>
                <div className="passaboutusbtn">
                  <button>
                    <Discord color="#fff" /> Discord
                  </button>
                  <button>
                    <TwitterIcon color="#fff" /> Twitter
                  </button>
                  <button>
                    <Instagram color="#fff" /> instagram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
