import { React } from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api/api";

const Post = (props) => {
  const history = useHistory();

  return (
    <div>
      {props.el.active === true ? (
        <div className="postDescription">
          <div
            onClick={(event) => {
              event.preventDefault();
              console.log("clicked the whole post");
              props.setFeaturedItem(props.el);
              history.push("/FeaturedPost");
            }}
          >
            <h3>{props.el.title.toUpperCase()}</h3>
            {props.el.description}
            <ul>
              <li>
                <b>Price:</b> {props.el.price}
              </li>
              <li>
                <b>Seller: </b>
                {props.currentUserIsAuthor ? "ME" : props.el.author.username}
              </li>
              <li>
                <b>Location: </b>
                {props.el.location ? props.el.location : "Not Available"}
              </li>
              <li>
                <b>Will Deliver: </b>
                {props.el.willDeliver ? "Yes" : "No"}
              </li>
            </ul>
          </div>
          {props.currentUserIsAuthor ? (
            <>
              <button
                onClick={async (event) => {
                  console.log("DELETE CLICKED");
                  event.preventDefault();
                  await deletePost(props.el._id);
                  props.onEdit();
                }}
              >
                DELETE
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  props.setPostToEdit(props.el);
                  history.push("/newPostForm");
                  props.onEdit();
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
                props.setFeaturedItem(props.el);
                history.push("/MessageForm");
              }}
            >
              MESSAGE
            </button>
          ) : null}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
