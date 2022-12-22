import React from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api/api";

const Feature = (props) => {
  console.log(props.featuredItem);
  const history = useHistory();

  return (
    <div className="container">
      <div className="subHeader">{props.featuredItem.title.toUpperCase()}</div>
      <ul>
        <li>
          {" "}
          <b>Description:</b> {props.featuredItem.description}
        </li>
        <li>
          {" "}
          <b>Price:</b> {props.featuredItem.price}
        </li>
        <li>
          {" "}
          <b>Location:</b> {props.featuredItem.location}
        </li>
        <li>
          {" "}
          <b>Seller:</b> {props.currentUserIsAuthor ? "ME" : props.featuredItem.author.username}
        </li>
      </ul>
      <br />
      {props.currentUserIsAuthor ? (
        <>
          <button
            onClick={async (event) => {
              console.log("DELETE CLICKED");
              event.preventDefault();
              await deletePost(props.featuredItem._id);
              history.goBack();
            }}
          >
            DELETE
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              history.push("/newPostForm");
            }}
          >
            EDIT
          </button>
        </>
      ) : localStorage.getItem("auth_token") ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            console.log("clicked the message button");
            history.push("/MessageForm");
          }}
        >
          MESSAGE
        </button>
      ) : null}
      <button
        onClick={(event) => {
          event.preventDefault();
          history.goBack();
        }}
      >
        Back to Posts
      </button>
    </div>
  );
};

export default Feature;
