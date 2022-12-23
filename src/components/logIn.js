import React from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../api/api";

const LogIn = (props) => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="subHeader"> Log In! </div>
      <form className="logInForm">
        <div className="logInWarning">
          <span className="material-icons">warning</span>To view post details you must
          be logged in.
        </div>
        <div>
          USERNAME:
          <input
            required
            value={props.username}
            onChange={(event) => {
              event.preventDefault();
              props.setUsername(event.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          PASSWORD:
          <input
            required
            type="password"
            value={props.password}
            onChange={(event) => {
              event.preventDefault();
              props.setPassword(event.target.value);
            }}
          ></input>
        </div>
        <div className="logInButton">
          <button
            onClick={async (event) => {
              event.preventDefault();
              await logIn(props.username, props.password);
              props.setUsername("");
              props.setPassword("");
              if (localStorage.getItem("auth_token") != null) {
                props.setIsLoggedIn(true);
                history.push("/profile");
              }
            }}
          >
            ENTER
          </button>
        </div>
      </form>

      <div className="logInUserQ">
        Not already a user? <p />
        <button
          className="logInCreateAccount"
          onClick={(event) => {
            event.preventDefault();
            history.push("/register");
          }}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
