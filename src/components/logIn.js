import React from "react";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="logInTitle"> Log In! </div>
      <form className="logInForm">
        <div>
          Username:<input></input>
        </div>
        <div>
          Password:<input></input>
        </div>
        <button>Enter</button>
      </form>
      <br />
      <div>
        Not already a user? <br />{" "}
        <button className="logInCreateAccount"
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
