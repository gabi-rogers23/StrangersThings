import { React } from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api/api";

const Post = (props) => {
  const history = useHistory();

  return (
    <div>
      {props.el.active === true ? (
        <div
          className="postDescription">
          <div onClick={(event) => {
            event.preventDefault();
            console.log("clicked the whole post")
             props.setFeaturedItem(props.el);
            history.push("/FeaturedPost");
          }}> <h3>{props.el.title.toUpperCase()}</h3>
          {props.el.description} 
          <ul>
            <li>
              <b>Price:</b> {props.el.price}
            </li>
            <li>
              <b>Seller:</b> {props.currentUserIsAuthor ? "ME" : props.el.author.username}
            </li>
            <li>
              <b>Location:</b> {props.el.location}
            </li>
          </ul>
          </div>
          {props.currentUserIsAuthor ? (
            <>
              <button
                onClick={async (event) => {
                  event.preventDefault();
                   await deletePost()
                }}
              > DELETE </button>
              <button>EDIT</button>
            </>
          ) : <button onClick={(event) => {
            event.preventDefault();
            console.log("clicked the message button")
             history.push("/MessageForm");
          }}>MESSAGE</button>  }

        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
