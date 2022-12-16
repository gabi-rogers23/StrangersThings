import React from "react";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
   const history = useHistory()
  return (
    <div className="container">
      <div className="subHeader">Welcome to Your Profile {props.username}</div>
      <button onClick={(event) => {
         event.preventDefault()
         history.push("./newPostForm")
      }}>Add New Post</button>
    </div>
  );
};

export default Profile;
