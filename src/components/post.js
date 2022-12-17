import { React } from "react";
import { useHistory } from "react-router-dom";

const Post = (props) => {
    const history = useHistory();

  return (
    <div >
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
            <b>Price:</b> {props.el.price}{" "}
          </li>
          <li>
            <b>Seller: </b> {props.el.author.username}{" "}
          </li>
          <li>
            <b>Location:</b> {props.el.location}{" "}
          </li>
        </ul>
        {props.currentUser === props.el.author ? (<><button>DELETE</button><button>EDIT</button></>) : (null)}
      </div>
    </div>
  );
};

export default Post;