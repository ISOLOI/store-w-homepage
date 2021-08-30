import "../../styles.css";
import { useAuthContext } from "../../contexts/auth-context.js";

export default function LoginFalse() {
  const {
    isUserLoggedIn,
    setUserLogin,
    userName,
    setUserName,
    password,
    setPassword
  } = useAuthContext();

  return (
    <>
      {" "}
      {isUserLoggedIn ? (
        <h1>You are now Logged In</h1>
      ) : (
        <div className="login-form-box">
          <div className="sign-in-box"> Sign In</div>

          <div className="username-password-field">
            <input
              className="username-field"
              placeholder="username"
              onChange={() => setUserName(event.target.value)}
            ></input>
            <input
              className="password-field"
              placeholder="password"
              onChange={() => setPassword(event.target.value)}
            ></input>
          </div>

          <div className="forgot-field">
            Forgot <span className="username-span">Username</span> /{" "}
            <span className="password-span">Password?</span>{" "}
          </div>

          <div
            className="sign-in-box-2"
            onClick
          >
            {" "}
            Sign In
          </div>

          <div className="no-account">Don't have an account?</div>
          <div className="sign-up-field">SIGN UP NOW</div>
        </div>
      )}
    </>
  );
}
