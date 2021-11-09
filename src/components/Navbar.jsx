import "../styles/index.scss";

const Navbar = () => {
  return (
    <div className="navigation">
      <h1 className="logo">LOGO NAME</h1>
      <ul className="pages">
        <li>Home</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default Navbar;
