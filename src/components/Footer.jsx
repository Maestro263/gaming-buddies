import IGLogo from "../images/Instagram.svg";
import YoutubeLogo from "../images/Youtube.png";
import FacebookLogo from "../images/Facebook.svg";

import { Link } from "react-router-dom";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerNav">
        <li>
          <Link to="/" style={{ color: "yellow" }}>
            Forside
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "red" }}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ color: "blue" }}>
            Log ind
          </Link>
        </li>
        <div className="some">
          <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
            <img src={IGLogo} alt="Instagram Logo" width="50" height="50" />
          </a>
          <a target="_blank" href="https://www.youtube.com/" rel="noreferrer">
            <img
              src={YoutubeLogo}
              alt="Youtube Logo"
              width="40"
              height="40"
              className="youtubeLogo"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <img
              src={FacebookLogo}
              alt="Facebook Logo"
              width="50"
              height="50"
            />
          </a>
        </div>
        <li style={{ color: "green" }}>Regler</li>
        <li style={{ color: "purple" }}>Om Os</li>
        <li style={{ color: "orange" }}>Vilkårer</li>
      </ul>
    </div>
  );
};

export default Footer;
