import "../styles/login.scss";
const Login = () => {
  return (
    <div className="login">
      <form>
        <label id="uname">Username:</label>
        <input type="text" id="uname" name="uname" />
        <label id="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
