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
          PASSWORD:<input required type="password" value={props.password} onChange={(event) =>{
            event.preventDefault();
            console.log("login Password " + event.target.value)
            props.setPassword(event.target.value)
          }}></input>
        </div>
        <div className="logInButton"><button onClick={async (event) => {
            event.preventDefault();
            await logIn(props.username, props.password);
            props.setUsername("");
            props.setPassword("");
            if (localStorage.getItem("auth_token") != null){
                props.setIsLoggedIn(true);
                history.push("/profile")
            }
        }}>Enter</button></div>
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
