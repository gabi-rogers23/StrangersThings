import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  return (
    <div>
      <div className="container">
      <h2>Welcome to Stranger's Things!</h2>
        <div className="homeLeftSqare">
    
          <img src="/Images/homePageImage.jpg"></img>
        </div>
        <div className="homeRightSide">
  
          <img className="cube" src="/Images/cube.png"></img>
          <div className="homeColumn">
            <h3>Buy. Sell. Repeat. </h3>
            <p className="homeParagraph">
              Here at Stranger's Things you can buy and sell any item you wish!
            </p>
            <br />
            <h4>To get started:</h4>
            {props.isLoggedIn ? (
              <><button onClick={(event) =>{
                event.preventDefault();
                history.push("/newPostForm")
              }}>Create Post</button>
              <p>- or -</p>
              <button onClick={(event) => {
                event.preventDefault();
                history.push("/profile")
              }}>View Profile</button></>
            ) : (
              <>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/logIn");
                  }}
                >
                  Log In
                </button>
                <p>- or -</p>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/register");
                  }}
                >
                  Create an Account!
                </button>
              </>
            )}
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
