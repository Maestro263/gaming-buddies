import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles/App.scss";

import logo from "./images/gamemeet.png";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <img src={logo} alt="GameMeet Logo" width="auto" height="70" />

          <ul className="pages">
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
              <Link to="/login" className="thirdNav">
                Log ind
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
