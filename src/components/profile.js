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
  }, []);

  return (
    <div className="container">
      <div className="subHeader">
        Welcome to Your Profile {profileInfo.username}!
      </div>
      <img className="cube" src="/Images/cube.png"></img>
      <button
        className="featureBtn"
        onClick={(event) => {
          event.preventDefault();
          props.setFeaturedItem(null);
          history.push("./newPostForm");
        }}
      >
        <span className="material-icons">add</span>
        Add New Post
      </button>
      <br />
      {viewMessages === true ? (
        <>
          <button
            className="featureBtn"
            onClick={(event) => {
              event.preventDefault();
              setViewMessages(false);
            }}
          >
            <span className="material-icons">format_list_bulleted</span> View
            Your Posts
          </button>
          <div className="postsList">
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
            className="featureBtn"
            onClick={(event) => {
              event.preventDefault();
              setViewMessages(true);
              props.setFeaturedItem();
            }}
          >
            <span className="material-icons">mail</span> View Your Messages
          </button>
          <div className="postsList">
            {profileInfo.posts.map((el) => {
              return (
                <Post
                  el={el}
                  setFeaturedItem={props.setFeaturedItem}
                  key={el._id}
                  isLoggedIn={props.isLoggedIn}
                  setCurrentUserIsAuthor={props.setCurrentUserIsAuthor}
                  currentUserIsAuthor={true}
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
