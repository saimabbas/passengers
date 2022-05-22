import React, { useState, useEffect } from "react";
import Discord from "../../assets/icons/Discord";
import Instagram from "../../assets/icons/Instagram";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import Logo from "../../assets/img/Logo";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../assets/icons/ChevronUp";
import HelpIcon from "../../assets/img/help-icon.svg";
import { MdClear } from "react-icons/md";
import Support from "../../assets/img/helpiconimg.png";
import { gsap } from "gsap";
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const [showHelpBox, setShowHelpBox] = useState(false);
  const showHelpBoxFun = () => {
    setShowHelpBox(true);
  };
  const hideHelpBoxFun = () => {
    setShowHelpBox(false);
  };

  useEffect(() => {
    let footerLeft = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 100%",
      },
    });
    footerLeft
      .fromTo(
        ".footer-left > *",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Power3.easeInOut,
        }
      )
      .fromTo(
        ".footer-center > *",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".footer-center .fc-grid a",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".footer-right > *",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".footer-bottom > *",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: "0",
          opacity: 1,
          duration: 1.25,
          stagger: 0.1,
          ease: Power3.easeInOut,
        },
        "<0"
      );
  }, []);

  return (
    <footer>
      <div className="footer-pc">
        <div className="box">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-left">
                <Logo color="#fff" />
                <p>Follow Us On Social Media</p>
                <div className="fl-icons-grid">
                  <Instagram color="#fff" />
                  <TwitterIcon color="#fff" />
                  <Discord color="#fff" />
                </div>
              </div>
              <div className="footer-center">
                <h6>The Whitelist Info</h6>
                <div className="fc-grid">
                  <a href="https://www.youtube.com/">Subscribe</a>
                  <a href="https://www.youtube.com/">Upcoming Drops </a>
                  <a href="https://www.youtube.com/">Roadmap</a>
                  <a href="https://www.youtube.com/">
                    <b>Meet the Team</b>
                  </a>
                  <a href="https://www.youtube.com/">How it Works</a>
                </div>
              </div>
              <div className="footer-right">
                <h6>Join Newsletter</h6>
                <p>
                  Subscribe our newsletter to get latest <Logo color="#fff" />{" "}
                  <br />
                  updates
                </p>
                <div className="fr-subscribe-input-box">
                  <input type="text" placeholder="Enter your Email " />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2022. All rights reserved</p>
        </div>
      </div>
      <div className="footer-mob">
        <div className="box">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-left">
                <Logo color="#fff" />
                <p>Follow Us On Social Media</p>
                <div className="fl-icons-grid">
                  <Instagram color="#fff" />
                  <TwitterIcon color="#fff" />
                  <Discord color="#fff" />
                </div>
              </div>

              <div className="footer-center-mob">
                <Accordion>
                  <Accordion.Item eventKey={1}>
                    <Accordion.Header>
                      <div className="footer-center-header-mob">
                        <h6>The Whitelist Info</h6>
                        <ChevronUp color="#fff" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="fc-grid-mob">
                        <a href="https://www.youtube.com/">Subscribe</a>
                        <a href="https://www.youtube.com/">Upcoming Drops </a>
                        <a href="https://www.youtube.com/">Roadmap</a>
                        <a href="https://www.youtube.com/">
                          <b>Meet the Team</b>
                        </a>
                        <a href="https://www.youtube.com/">How it Works</a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <Accordion>
                <Accordion.Item eventKey={1}>
                  <Accordion.Header>
                    <div className="footer-center-header-mob">
                      <h6>Join Newsletter</h6>
                      <ChevronUp color="#fff" />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-right">
                      <p>
                        Subscribe our newsletter to get latest{" "}
                        <Logo color="#fff" />
                        updates
                      </p>
                      <div className="fr-subscribe-input-box">
                        <input type="text" placeholder="Enter your Email " />
                        <button>Subscribe</button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="footer-bottom">
            <p>Copyright © 2022. All rights reserved</p>
            <img src={HelpIcon} alt="HelpIcon" />
          </div>
        </div>
      </div>
      {props.moreBtn ? (
        <div className="more-btn">
          More <RefreshIcon className="light-img" color="#fff" />{" "}
          <RefreshIcon className="dark-img" color="#000" />
        </div>
      ) : null}

      <div className="help-box">
        <img onClick={showHelpBoxFun} src={HelpIcon} alt="HelpIcon" />
        {showHelpBox ? (
          <div className="wlfootermodal">
            <div className="helpiconmodel">
              <div className="hiheader">
                <div className="hihimg">
                  <img src={Support} alt="" />
                  <p>Support</p>
                </div>
                <div onClick={hideHelpBoxFun}>
                  <MdClear />
                </div>
              </div>
              <div className="wlupinput">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="wlupinput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email Address" />
              </div>
              <div className="wlupinput">
                <label htmlFor="">Problem</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="What's the problem?"
                ></textarea>
              </div>
              <button>Send</button>
            </div>
          </div>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
