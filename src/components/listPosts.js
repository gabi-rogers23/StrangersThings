import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api/api";
import { Post } from "./exports";

const ListPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);

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
      <div className="subHeader">Post Feed</div>
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
              username = {el.author.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListPosts;
