import { useEffect } from "react";
import { gsap } from "gsap";
import { Power3, Back } from "gsap/dist/gsap";
const useStylesEffect = () => {
  useEffect(() => {
    let headerAnim = gsap.timeline({
      // delay: 4,
    });
    headerAnim
      .fromTo(
        ".header-left .header-logo",
        {
          opacity: 0,
          x: "25rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 1.5,
          ease: Power3.easeInOut,
        }
      )
      .fromTo(
        ".header-left ul li",
        {
          opacity: 0,
          x: "25rem",
        },
        {
          opacity: 1,
          x: "0",
          duration: 1.5,
          ease: Power3.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".header-right-icon",
        {
          opacity: 0,
          x: "2.5rem",
        },
        {
          opacity: 1,
          delay: 0.5,
          x: "0",
          duration: 1.5,
          ease: Power3.easeInOut,
          stagger: 0.1,
        },
        "<0"
      )
      .fromTo(
        ".header-right .connect-wallet-btn",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: Power3.easeInOut,
        },
        "<0"
      )
      .fromTo(
        ".header-right .connect-wallet-btn",
        {
          width: "5rem",
        },
        {
          width: "15rem",
          duration: 1.25,
          ease: Back.easeOut,
        },
        "<0.9"
      )
      .fromTo(
        ".header-right .connect-wallet-btn span",
        {
          width: 0,
          x: "2.5rem",
          opacity: 0,
        },
        {
          width: "7ch",
          x: "0",
          opacity: 1,
          duration: 1.25,
          ease: Back.easeOut,
        },
        "<0.25"
      );
  }, []);
};

export default useStylesEffect;
