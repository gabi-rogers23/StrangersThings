import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api/api";
import { useHistory } from "react-router-dom";

const Posts = (props) => {
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
    <div>
      <div className="postsTop">
        <h2 className="postFeed">Post Feed</h2>
        <form className="postSearch">
          <input></input>
          <button>Search</button>
        </form>
      </div>
      <div className="postsList">
        {allPosts.map((el) => {
          return (
            <div key={el.title}>
              <div className="postDescription" onClick = { async (event) => {
                event.preventDefault();
                  await props.setFeaturedItem(el);
                  history.push("/FeaturedPost")
              }}>
                <h3>{el.title.toUpperCase()}</h3>
                {el.description}
                <ul>
                <li><b>Price:</b> {el.price}</li>
                <li><b>Seller: </b>{el.author.username}</li>
                <li><b>Location:</b> {el.location}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;