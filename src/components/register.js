import React from "react";
import { useHistory } from "react-router-dom";
import { registerNewUser } from "../api/api";

const Register = (props) => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="subHeader">Create an Account!</div>
      <form className="logInForm">
        <div>Set your username and password to create an account!</div>
        <br />
        <span className="material-icons">sentiment_satisfied_alt</span>
        <br />
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
            value={props.password}
            onChange={(event) => {
              event.preventDefault();
              props.setPassword(event.target.value);
            }}
          ></input>
        </div>
        <br />
        <button
          onClick={async (event) => {
            event.preventDefault();
            await registerNewUser(props.username, props.password);
            props.setUsername("");
            props.setPassword("");
            history.push("/profile");
          }}
        >
          Enter
        </button>
      </form>
      <div className="logInUserQ">
        Already a user? <p />
        <button
          className="logInCreateAccount"
          onClick={(event) => {
            event.preventDefault();
            props.setUsername("");
            props.setPassword("");
            history.push("/logIn");
          }}
        >
          Log In!
        </button>
      </div>
    </div>
  );
};

export default Register;
