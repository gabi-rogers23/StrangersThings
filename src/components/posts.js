import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAllPosts } from "../api/api";

const Posts = () => {
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
    <div>
      <h2>Post Feed</h2>
      <div className="postsList">
        {allPosts.map((el) => {
          return <div key={el.title}>{el.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Posts;
