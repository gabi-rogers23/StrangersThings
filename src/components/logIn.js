import React from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../api/api";

const LogIn = (props) => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="logInTitle"> Log In! </div>
      <form className="logInForm">
        <div>
          USERNAME:
          <input
            required
            value={props.username}
            onChange={(event) => {
              event.preventDefault();
              console.log("login Username "+ event.target.value);
              props.setUsername(event.target.value);
            }}
          ></input>
          <br />
        </div>
        <div>
          PASSWORD:<input requred value={props.password} onChange={(event) =>{
            event.preventDefault();
            console.log("login Password " + event.target.value)
            props.setPassword(event.target.value)
          }}></input>
        </div>
        <button onClick={async (event) => {
            event.preventDefault();
            await logIn(props.username, props.password)
            props.setUsername("");
            props.setPassword("");
        }}>Enter</button>
      </form>
      <br />
      <div>
        Not already a user? <br />
        <button
          className="logInCreateAccount"
          onClick={(event) => {
            event.preventDefault();
            history.push("/register");
          }}
        >
          Create an account.
        </button>
      </div>
    </div>
  );
};

export default LogIn;
