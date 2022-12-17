import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getProfile } from "../api/api";
import { Post } from "./exports";

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
        Welcome to Your Profile {profileInfo.username}
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          history.push("./newPostForm");
        }}
      >
        Add New Post
      </button>
      {viewMessages === true ? (
        <>
          {" "}
          <button
            onClick={(event) => {
              event.preventDefault();
              setViewMessages(false);
            }}
          >
            View Your Posts
          </button>{" "}
          <div className="profileInfo">
            {profileInfo.messages.map((el) => {
              return (
                <div>
                  <div>From: {el.fromUser.username}</div>
                  <div>{el.content}</div>
                </div>
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
            }}
          >
            Messages
          </button>
          <div className="profileInfo">
            {profileInfo.posts.map((el) => {
              return (
                <Post
                  el={el}
                  setFeaturedItem={props.setFeaturedItem}
                  key={el._id}
                  currentUser={profileInfo._id}
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
