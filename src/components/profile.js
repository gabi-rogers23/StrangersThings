import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getProfile } from "../api/api";
import { Post, Messages } from "./exports";

const Profile = (props) => {
  const [profileInfo, setProfileInfo] = useState({
    posts: [],
    username: "",
    _id: "",
  });
  const [viewMessages, setViewMessages] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getProfile().then((profileResults) => {
      try {
        console.log(profileResults);
        setProfileInfo(profileResults);
      } catch (error) {
        console.error("Uh oh! Problems with Profile Promises");
      }
    });
    props.setCurrentUserIsAuthor(true);
  }, []);

  return (
    <div className="container">
      <div className="subHeader">
        Welcome to Your Profile {profileInfo.username}!
      </div>
      <img className="cube" src="/Images/cube.png"></img>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.setFeaturedItem(null);
          history.push("./newPostForm");
        }}
      >
        Add New Post
      </button>
      <br />
      {viewMessages === true ? (
        <>
          <button
            onClick={(event) => {
              event.preventDefault();
              setViewMessages(false);
            }}
          >
            YOUR POSTS
          </button>
          <div className="profileInfo">
            {profileInfo.messages.map((el) => {
              return (
                <Messages
                  el={el}
                  key={el._id}
                  currentUserIsAuthor={el.fromUser._id === profileInfo._id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={(event) => {
              event.preventDefault();
              setViewMessages(true);
              props.setFeaturedItem();
            }}
          >
            MESSAGES
          </button>
          <div className="profileInfo">
            {profileInfo.posts.map((el) => {
              return (
                <Post
                  el={el}
                  setFeaturedItem={props.setFeaturedItem}
                  key={el._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
