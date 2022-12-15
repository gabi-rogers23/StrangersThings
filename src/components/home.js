import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="homeLeftSqare">
          <img src="/Images/homePageImage.jpg"></img>
          Photo by{" "}
          <a href="https://unsplash.com/es/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Joanna Kosinska
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <div className="homeRightSide">
          <p>Welcome to Stranger's Things!</p>
          <p className="homeColumn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            mollis eros. Donec a cursus tortor. Nam id mauris non urna cursus
            dignissim at id augue. Integer odio sapien, vulputate sed viverra
            sit amet, varius vitae velit. Proin posuere dolor neque, et auctor
            ex vulputate et. Duis lobortis neque vel turpis pellentesque mattis.
            Nunc sodales sem sit amet sapien egestas sagittis. Proin ultricies
            leo porta facilisis cursus. Donec efficitur vel tellus ac porta. In
            a volutpat turpis, dapibus egestas lectus. In pellentesque odio sit
            amet urna ullamcorper mollis. Vestibulum eros lorem, luctus et
            malesuada mattis, aliquet ut neque. Aliquam eleifend lacinia leo a
            lacinia. Nam eget dolor cursus, semper elit in, faucibus augue.
            Fusce ultricies sem arcu, vel pellentesque ex varius sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
