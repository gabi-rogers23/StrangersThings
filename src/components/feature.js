import React from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api/api";

const Feature = (props) => {
  console.log(props.featuredItem);
  const history = useHistory();

  return (
    <div className="container">
      <div className="subHeader">{props.featuredItem.title.toUpperCase()}</div>
      <div className="postDescription">
        
        <ul>
          <li>
            <b>Description:</b> {props.featuredItem.description}
          </li>
          <br />
          <li>
            <b>Price:</b> {props.featuredItem.price}
          </li>
          <br />
          <li>
            <b>Location:</b> {props.featuredItem.location}
          </li>
          <br />
          <li>
            <b>Updated:</b> {props.featuredItem.updatedAt}
          </li>
          <br />
          <li>
            <b>Seller:</b>
            {props.currentUserIsAuthor
              ? <> ME<span className="material-icons">star</span></>
              : props.featuredItem.author.username}
          </li>
          <br />
          <li>
            <b>Will Deliver: </b>
            {props.featuredItem.willDeliver ? "Yes" : "No"}
          </li>
        </ul>
        <br />
        {props.currentUserIsAuthor ? (
          <>
            <button
              className="featureBtn"
              onClick={async (event) => {
                console.log("DELETE CLICKED");
                event.preventDefault();
                await deletePost(props.featuredItem._id);
                history.goBack();
              }}
            >
              <span className="material-icons">delete</span>
              DELETE
            </button>
            <button
              className="featureBtn"
              onClick={(event) => {
                event.preventDefault();
                history.push("/newPostForm");
              }}
            >
              <span className="material-icons">edit</span>
              EDIT
            </button>
          </>
        ) : localStorage.getItem("auth_token") ? (
          <button
            className="featureBtn"
            onClick={(event) => {
              event.preventDefault();
              console.log("clicked the message button");
              history.push("/MessageForm");
            }}
          >
            <span className="material-icons">send</span>
            MESSAGE
          </button>
        ) : null}
        <button
          className="featureBtn"
          onClick={(event) => {
            event.preventDefault();
            props.setCurrentUserIsAuthor()
            history.goBack();
          }}
        >
          <span className="material-icons">arrow_back</span> BACK
        </button>
      </div>
    </div>
  );
};

export default Feature;
