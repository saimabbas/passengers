import React, { useEffect, useRef, useState } from "react";
import Passengers from "./../assets/img/passenger.png";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
// import HeroBgDark from "./../assets/img/pl.png";
import ComingVideo from "../assets/videos/comingsoon.mp4";
import StarsVideo from "../assets/videos/trimmed (1).mp4";
import BackAudio from "../assets/audio/back-ad.mpeg";
import { gsap } from "gsap";
import Moon from "../assets/img/moon.png";
import Cloud1Light from "./../assets/img/cloud-1.png";
import Cloud1Dark from "./../assets/img/cloud-1-dark.png";
import Cloud2Light from "./../assets/img/cloud-2.png";
import Cloud2Dark from "./../assets/img/cloud-2-dark.png";
import Cloud3Light from "./../assets/img/cloud-3.png";
import Cloud3Dark from "./../assets/img/cloud-3-dark.png";
import $ from "jquery";
import { FaRocket } from "react-icons/fa";
import { SpinnerCircularFixed, SpinnerCircular } from "spinners-react";
import { subscribeToComingSoonII } from "../HTTP/endpoints";
import { toast } from "react-toastify";
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
const ComingSoonDark = () => {
  const ad = useRef(null);
  const vid = useRef(null);
  const [timeLeft, setTimeLeft] = useState();
  const [launch, setLaunch] = useState(true);
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleSubscribe = async (e) => {
    console.log("submitting");
    if (!email) return;
    const payload = JSON.stringify({ email });
    try {
      setIsLoading(true);
      await subscribeToComingSoonII(payload);
      setEmail("");
      setIsLoading(false);
      toast.success("Subscribed Successfully.");
    } catch (err) {
      console.log("err", err);
      toast.error(err.message);
      setIsLoading(false);
    }
  };
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`07/23/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  gsap.registerPlugin(SplitText);
  useEffect(() => {
    const comingsoonHeading = new SplitText(".comingsoon-heading", {
      type: "chars",
    });
    const comingsoonHeadingChars = comingsoonHeading.chars;

    const comingsoonTimer1 = new SplitText(".cst-1 span", {
      type: "chars",
    });
    const comingsoonTimerChars1 = comingsoonTimer1.chars;
    const comingsoonTimer2 = new SplitText(".cst-2 span", {
      type: "chars",
    });
    const comingsoonTimerChars2 = comingsoonTimer2.chars;
    const comingsoonTimer3 = new SplitText(".cst-3 span", {
      type: "chars",
    });
    const comingsoonTimerChars3 = comingsoonTimer3.chars;

    const comingsoonTextComponent1 = new SplitText(
      ".comingsoon-text-component-1",
      {
        type: "chars, words",
      }
    );
    const comingsoonTextComponent1Chars = comingsoonTextComponent1.chars;
    const comingsoonTextComponent2 = new SplitText(
      ".comingsoon-text-component-2",
      {
        type: "chars, words",
      }
    );
    const comingsoonTextComponent2Chars = comingsoonTextComponent2.chars;
    const comingsoonTextComponent3 = new SplitText(
      ".comingsoon-text-component-3",
      {
        type: "chars, words",
      }
    );
    const comingsoonTextComponent3Chars = comingsoonTextComponent3.chars;

    let CMAnim = gsap.timeline({
      paused: true,
    });
    CMAnim.fromTo(
      ".comingsoon-dark-loader-box span",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.25,
        repeat: 2,
        delay: 1,
      }
    )

      .fromTo(
        ".comingsoon-dark-header img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          repeat: 3,
        },
        "<0.5"
      )

      .fromTo(
        comingsoonHeadingChars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.65,
          stagger: {
            repeat: 2.25,
            each: 0.05,
            from: "random",
          },
        },
        "<0.5"
      )
      .fromTo(
        ".comdarktimer > *",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: {
            each: 0.1,
            from: "random",
          },
        },
        "<0.25"
      )

      .fromTo(
        comingsoonTimerChars1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: {
            repeat: 3,
            each: 0.085,
            from: "random",
          },
        },
        "<0"
      )
      .fromTo(
        comingsoonTimerChars2,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: {
            repeat: 3,
            each: 0.085,
            from: "random",
          },
        },
        "<0"
      )
      .fromTo(
        comingsoonTimerChars3,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: {
            repeat: 3,
            each: 0.085,
            from: "random",
          },
        },
        "<0"
      )
      .fromTo(
        ".comsoondcontent",
        {
          scale: 0.65,
        },
        {
          scale: 1,
          duration: 1.5,
          delay: 0.75,
          ease: Power4.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".comingsoon-dark-loader-box",
        {
          x: 0,
        },
        {
          x: "200vw",
          duration: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".comingsoon-bottom-box",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".comingsoon-op-component",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        comingsoonTextComponent1Chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          stagger: {
            repeat: 2,
            each: 0.015,
            from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        ".comdarkinput .comdarkinputcomp",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: {
            repeat: 2,
            each: 0.1,
            // from: "random",
          },
        },
        "<0.25"
      )
      .fromTo(
        comingsoonTextComponent2Chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          stagger: {
            repeat: 2,
            each: 0.015,
            from: "random",
          },
        },
        "<0.35"
      )
      .fromTo(
        comingsoonTextComponent3Chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          stagger: {
            repeat: 2,
            each: 0.015,
            from: "random",
          },
        },
        "<0.35"
      )
      .fromTo(
        ".coomsoonicons svg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          stagger: {
            repeat: 3,
            each: 0.05,
            from: "random",
          },
        },
        "<0.25"
      );
    let ComingSoonCloud1Anim = gsap.timeline();
    ComingSoonCloud1Anim.fromTo(
      ".comingsoon-cloud-1",
      {
        transform: "translate(50vw, 0)",
      },
      {
        transform: "translate(101vw, 0)",
        duration: 100,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-1", {
        transform: "translate(-20vw, 0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-1",
        {
          transform: "translate(-20vw, 0)",
        },
        {
          transform: "translate(101vw, 0)",
          duration: 200,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );

    let ComingSoonCloud2Anim = gsap.timeline();
    ComingSoonCloud2Anim.fromTo(
      ".comingsoon-cloud-2",
      {
        transform: "translate(10vw,0)",
      },
      {
        transform: "translate(101vw,0)",
        duration: 125,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-2", {
        transform: "translate(  -10vw,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-2",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 250,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );
    let ComingSoonCloud3Anim = gsap.timeline();
    ComingSoonCloud3Anim.fromTo(
      ".comingsoon-cloud-3",
      {
        transform: "translate(90vw  ,0)",
      },
      {
        transform: "translate( 101vw ,0)",
        duration: 20,
        ease: Linear.easeInOut,
      }
    )
      .to(".comingsoon-cloud-3", {
        transform: "translate( -10vw ,0)",
        duration: 0,
        ease: Linear.easeInOut,
      })
      .fromTo(
        ".comingsoon-cloud-3",
        {
          transform: "translate( -10vw ,0)",
        },
        {
          transform: "translate(101vw  ,0)",
          duration: 225,
          ease: Linear.easeInOut,
          repeat: -1,
        }
      );
    $(".launch-btn").click(() => {
      $(".comsoondmain").css({ display: "block" });
      $(".launch-screen").css({ display: "none" });
      ad.current.play();
      CMAnim.play(0);
      setTimeout(() => {
        vid.current.play();
      }, 2150);
    });
  }, []);
  setTimeout(() => {
    $("#comingsoonvideo").css({ display: "none" });
    $("#starsvideo").css({ display: "block" });
  }, 15000);
  return (
    <div className="app light-theme">
      <div className="coomsoondark">
        <div className="launch-screen">
          <button className="launch-btn">Launch</button>
          {/* <img className="launch-bg" src={HeroBgDark} alt="HeroBgDark" /> */}
          {/* <img src={Moon} alt="Moon" className="comingsoon-moon" />
          <img
            src={Cloud1Dark}
            alt="Cloud1Dark"
            className="comingsoon-cloud-1"
          />
          <img
            src={Cloud2Dark}
            alt="CloudDarkt"
            className="comingsoon-cloud-2"
          />
          <img
            src={Cloud3Dark}
            alt="ClouDarkht"
            className="comingsoon-cloud-3"
          /> */}
        </div>

        <div className="comsoondmain">
          <video ref={vid} muted className="backvideo" id="comingsoonvideo">
            <source src={ComingVideo} type="video/mp4" />
          </video>
          <video muted loop autoPlay className="backvideo" id="starsvideo">
            <source src={StarsVideo} type="video/mp4" />
          </video>
          <div className="comingsoon-dark-loader-box">
            <span>
              <SpinnerCircularFixed
                size={65}
                thickness={150}
                speed={150}
                color="#fff"
                secondaryColor="rgba(255, 255, 255, 0)"
              />
            </span>
          </div>
          <div className="comingsoon-dark-header">
            <img src={Passengers} alt="" />
          </div>
          <div className="comsoondcontent">
            <h1 className="comingsoon-heading conthrax">
              Coming <br /> Soon
            </h1>
            <div className="comdarktimer">
              <div className="comdarkday">
                <h6 className="comingsoon-timer cst-1 conthrax">
                  <i>{("0" + timeLeft?.days).slice(-2)}</i>{" "}
                  <span className="conthrax">DAYS</span>
                </h6>
              </div>
              <p className="conthrax">:</p>
              <div className="comdarkday">
                <h6 className="comingsoon-timer cst-2 conthrax">
                  <i>{("0" + timeLeft?.hours).slice(-2)}</i>{" "}
                  <span className="conthrax">HOURS</span>
                </h6>
              </div>
              <p className="conthrax">:</p>
              <div className="comdarkday">
                <h6 className="comingsoon-timer cst-3 conthrax">
                  <i>{("0" + timeLeft?.minutes).slice(-2)}</i>{" "}
                  <span className="conthrax">MINUTES</span>
                </h6>
              </div>
            </div>
            <audio ref={ad} controls className="back-audio" src={BackAudio} />
            <div className="comingsoon-bottom-box">
              <h5 className="comingsoon-text-component-1">
                Get notified when we are close to blast off:
              </h5>
              <div className="comdarkinput">
                <input
                  type="text"
                  value={email}
                  placeholder="Enter your email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="comdarkinputcomp"
                />
                <div className="comdarkinputcomp">
                  <button onClick={handleSubscribe} disabled={isLoading}>
                    {isLoading && (
                      <SpinnerCircular
                        size={20}
                        thickness={50}
                        speed={100}
                        color="rgba(255, 255, 255, 1)"
                        secondaryColor="rgba(0, 0, 0, 0.44)"
                      />
                    )}
                    <span
                      style={{ display: "inline-block", marginLeft: "5px" }}
                    >
                      Subscribe
                    </span>
                  </button>
                </div>
              </div>
              <h6 className="comingsoon-text-component-2">
                If you have any questions, please contact us at:
              </h6>
              <h4 className="comingsoon-text-component-3">
                Info@thewhitelist.com
              </h4>
              <div className="coomsoonicons comingsoon-op-component">
                <a href="https://www.instagram.com/_thewhitelist_/">
                  <Instagram color="rgba(255, 255, 255, 0.6)" />
                </a>
                <a href="https://twitter.com/_TheWhitelist_">
                  <TwitterIcon color="rgba(255, 255, 255, 0.6)" />
                </a>
                <a href="https://discord.gg/5y6Htj7Q">
                  <Discord color="rgba(255, 255, 255, 0.6)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDark;

/* 
coming soon font .....
timer .....
font of timer .....
responsiveness
Button to play audio .....
Flickering animation
*/
