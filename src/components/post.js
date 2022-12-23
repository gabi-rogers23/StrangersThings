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
              props.setCurrentUserIsAuthor(props.currentUserIsAuthor);

              if (props.isLoggedIn) {
                history.push("/FeaturedPost");
              } else {
                history.push("/logIn");
              }
            }}
          >
            {props.currentUserIsAuthor ? (
              <span className="material-icons">star</span>
            ) : (
              <span className="material-icons">inventory</span>
            )}
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
