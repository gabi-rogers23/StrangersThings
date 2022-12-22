import { React } from "react";
import { useHistory } from "react-router-dom";

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
              if (props.setCurrentUserIsAuthor) {
                props.setCurrentUserIsAuthor(props.el.isAuthor)
              }
              history.push("/FeaturedPost");
            }}
          >
            <img className="cube" src="/Images/cube.png"></img>
            <h3>{props.el.title.toUpperCase()}</h3>
            {props.el.description}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
