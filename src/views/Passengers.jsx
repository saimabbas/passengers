import React from "react";
import Logo from "./../assets/img/Passengers.png";
import Mute from "../assets/icons/Mute";
import UnMute from "../assets/icons/UnMute";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Discord from "../assets/icons/Discord";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import PassengerSwiperImg from "../assets/img/passengersswiper.png";
import PassengerTeam from "../assets/img/passengersteam.png";
import { MdExpandMore } from "react-icons/md";

const Passengers = () => {
  return (
    <div className="app light-theme">
      <div className="passengerpage">
        <div className="passengermain">
          <div className="passengersheaderhero">
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
                  <li>
                    <a href="#">
                      <b>F</b>aq
                    </a>
                  </li>
                </ul>
              </div>
              <div className="passengerheaderright">
                <div className="volumeicons">
                  <button>
                    <Mute color="#fff" />
                  </button>
                  <button>
                    <UnMute color="#030021" />
                  </button>
                </div>
                <button className="passengerscomingsoon">
                  <b>Mint </b>(Coming Soon)
                </button>
              </div>
            </header>
            <div className="box">
              <div className="passengershero">
                <h3 className="conthrax">Passengers</h3>
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
          <div className="passengersswiper">
            <p>Passengers Sneak Peek</p>

            <div className="passengersmainswiper">
              <Swiper className="mySwiper" spaceBetween={20} slidesPerView={5}>
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
              <h5>Passengers team</h5>
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
              <p>Frequently asked questions</p>
              <div className="pfaqbox">
                <div className="firstpassfaq">
                  <div className="fpfquest">
                    <div className="fpfqleft">
                      <span>01</span>
                      <p>What will the Mint price for Passengers be?</p>
                    </div>
                    <div className="fpfqright">
                      <MdExpandMore />
                    </div>
                  </div>
                  <div className="fpfans">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat repellendus molestias voluptatum quis nihil ad,
                      perspiciatis autem labore libero, obcaecati pariatur ipsum
                      nemo distinctio molestiae?
                    </h6>
                  </div>
                </div>
                <div className="firstpassfaq">
                  <div className="fpfquest">
                    <div className="fpfqleft">
                      <span>02</span>
                      <p>Does passengers have social media?</p>
                    </div>
                    <div className="fpfqright">
                      <MdExpandMore />
                    </div>
                  </div>
                  <div className="fpfans">
                    <h6>
                      Passengers social media is in collaboration with
                      TheWhitelist.com. for all passengers updates and
                      announcements please follow. (Please Link all socials)
                    </h6>
                  </div>
                </div>
                <div className="firstpassfaq">
                  <div className="fpfquest">
                    <div className="fpfqleft">
                      <span>03</span>
                      <p>How do i get in contact with Passengers? </p>
                    </div>
                    <div className="fpfqright">
                      <MdExpandMore />
                    </div>
                  </div>
                  <div className="fpfans">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat repellendus
                    </h6>
                  </div>
                </div>
                <div className="firstpassfaq">
                  <div className="fpfquest">
                    <div className="fpfqleft">
                      <span>04</span>
                      <p>When will the whole collection be reviled?</p>
                    </div>
                    <div className="fpfqright">
                      <MdExpandMore />
                    </div>
                  </div>
                  <div className="fpfans">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat repellendus molestias voluptatum quis nihil ad,
                      perspiciatis autem labore libero Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Voluptatem, deleniti
                      voluptatum dolor deserunt, qui odio voluptatibus neque
                      fugit quo rerum quaerat quam ullam, laudantium recusandae.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="passengersaboutus">
              <h6>About us</h6>
              <p>
                Passengers is and NFT collection made by lovers of space, for
                lovers of space. The goal with Passengers is to give as much
                back to <br /> its holders as possible. With industry leading
                utility, while providing amazing art. One lucky winner will get
                a chance to fly with Virgin Galactic and <br /> be with the
                stars in a way we only dreamed of when we were young. In
                addition to our Prize pools, we have Yield farming dividends,
                Minting royalties and a <br /> bunch more stuff to look forward
                to. Any other questions? P <br /> lease reach out to us on
                socials or by email. Looking forward to launch and <br />{" "}
                remember.. don't forget to look up.{" "}
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
  );
};

export default Passengers;
