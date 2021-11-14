import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles/App.scss";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <h1 className="logo">Gaming Buddies</h1>
          <ul className="pages">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
