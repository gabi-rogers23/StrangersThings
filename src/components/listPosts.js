import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllPosts } from "../api/api";
import { Post } from "./exports";

const ListPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    Promise.all([fetchAllPosts()]).then(([allPostsResults]) => {
      try {
        console.log(allPostsResults);
        setAllPosts(allPostsResults);
      } catch (err) {
        console.error("Uh oh! Problems with Promises");
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="subHeader">Post Feed </div>
      {localStorage.getItem("auth_token") ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            history.push("./newPostForm");
          }}
        >
          Add New Post
        </button>
      ) : null}
      <form className="postSearch">
        <input></input>
        <button>Search</button>
      </form>
      <div className="postsList">
        {allPosts.map((el) => {
          return (
            <Post
              el={el}
              setFeaturedItem={props.setFeaturedItem}
              key={el._id}
              currentUserIsAuthor={el.isAuthor}
              onDelete={() => {
                Promise.all([fetchAllPosts()]).then(([allPostsResults]) => {
                  try {
                    console.log(allPostsResults);
                    setAllPosts(allPostsResults);
                  } catch (err) {
                    console.error("Uh oh! Problems with Promises");
                  }
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListPosts;
