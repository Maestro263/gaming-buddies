import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "./images/gamemeet.png";

import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  function myFunction() {
    let element = document.getElementById("mobile-nav");
    element.classList.toggle("navbar-visible");
  }

  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Link to="/">
            <img src={logo} alt="GameMeet Logo" width="auto" height="70" />
          </Link>
          <div className="mobile-nav" id="mobile-nav" onClick={myFunction}>
            <FontAwesomeIcon
              icon={faBars}
              className="fontAwesome"
              id="fontAwesome"
            />
            <ul className="pages" id="pages">
              <li>
                <Link to="/" className="firstNav">
                  Forside
                </Link>
              </li>
              <li>
                <Link to="/contact" className="secondNav">
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="https://nifty-montalcini-3382e1.netlify.app/"
                  className="thirdNav"
                >
                  Log ind
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
