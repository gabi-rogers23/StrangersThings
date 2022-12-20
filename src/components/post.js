import { React } from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api/api";

const Post = (props) => {
  const history = useHistory();

  return (
    <div>
      {props.el.active === true ? (
        <div
          className="postDescription"
          onClick={async (event) => {
            event.preventDefault();
            await props.setFeaturedItem(props.el);
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
              <b>Seller:</b> {props.username}
            </li>
            <li>
              <b>Location:</b> {props.el.location}
            </li>
          </ul>
          {props.currentUser === props.el.author ? (
            <>
              <button
                onClick={async (event) => {
                  event.preventDefault();
                   await deletePost()
                }}
              >
                DELETE
              </button>
              <button>EDIT</button>
            </>
          ) : null}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
