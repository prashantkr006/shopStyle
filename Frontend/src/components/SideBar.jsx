import React, { useEffect } from "react";
import "./SideBar.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

/* <SocialIcon url="https://twitter.com/jaketrent" />; */

const SideBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="sidebar">
      <div className="social facebook">
        <a
          className="sidebar-link"
          href=" https://www.facebook.com/ironmannext/ "
          target="_blank"
        >
          <p>
            Like on Facebook <SiFacebook className="social-icons" />
            {/* <SocialIcon
              className="social-icons"
              url="https://www.facebook.com/profile.php?id=100009258792168"
            /> */}
          </p>
        </a>
      </div>
      <div className="social twitter">
        <a
          className="sidebar-link"
          href=" https://twitter.com/prashantkr006/ "
          target="_blank"
        >
          <p>
            Follow on Twitter
            <AiFillTwitterCircle
              className="social-icons"
              style={{ left: "28px", fontSize: "50PX" }}
            />
            {/* <SocialIcon
              className="social-icons"
              url="https://twitter.com/AkhilKrChoubey1?t=X96s_nnAIvMM096_RWsoYg&s=08"
            />{" "} */}
          </p>
        </a>
      </div>
      <div className="social google">
        <a
          className="sidebar-link"
          href="https://www.instagram.com/prashantkr006/ "
          target="_blank"
          rel="noreferrer"
        >
          <p>
            Follow on Instagram <AiFillInstagram className="social-icons" />
          </p>
        </a>
      </div>
      <div className="social youtube">
        <a
          className="sidebar-link"
          href="https://github.com/prashantkr006/"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            Follow on Github <BsGithub className="social-icons" />
            {/* <SocialIcon
              className="social-icons"
              url="https://github.com/AkhilChoubey"
            /> */}
          </p>
        </a>
      </div>
      <div className="social linkedin">
        <a
          className="sidebar-link"
          href=" https://www.linkedin.com/in/akhil-choubey-376887192/"
          target="_blank"
        >
          <p>
            Connect on LinkedIn <GrLinkedin className="social-icons" />
            {/* <SocialIcon
              className="social-icons"
              url="https://www.linkedin.com/in/akhil-choubey-376887192/"
            /> */}
          </p>
        </a>
      </div>
    </div>
  );
};

/* <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></br> */

export default SideBar;
