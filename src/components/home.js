import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <div className="container">
        <div className="homeLeftSqare">
          <img src="/Images/homePageImage.jpg"></img>
        </div>
        <div className="homeRightSide">
          
          <p>Welcome to Stranger's Things!</p>
          <img className="cube" src="/Images/cube.png"></img>
          <div className="homeColumn">
            <b>Buy. Sell. Repeat. </b>
            <p className="homeParagraph">
              Here at Stranger's Things you can buy and sell any item you wish!
            </p>
            <br />
            To get started: <p />
            <button
              onClick={(event) => {
                event.preventDefault();
                history.push("./logIn");
              }}
            >
              Log In
            </button>
            <p/>- or -<p/>
            <button
              onClick={(event) => {
                event.preventDefault();
                history.push("/register");
              }}
            >
              Create an Account!
            </button>
          </div>
        </div>
      </div>
      <div className="photoCredit">
        Photo by
        <a href="https://unsplash.com/es/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Joanna Kosinska
        </a>
        on
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Home;
