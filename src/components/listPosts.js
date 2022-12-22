import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllPosts } from "../api/api";
import { Post } from "./exports";

const ListPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  useEffect(() => {
    Promise.all([fetchAllPosts()]).then(([allPostsResults]) => {
      try {
        console.log(allPostsResults);
        setAllPosts(allPostsResults);
        setPostsToDisplay(allPostsResults);
      } catch (error) {
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
            props.setFeaturedItem(null);
            history.push("/newPostForm");
          }}
        >
          Add New Post
        </button>
      ) : null}
      <form className="postSearch">
        <input
          value={searchTerm}
          onChange={(event) => {
            event.preventDefault();
            console.log(event.target.value);
            setSearchTerm(event.target.value);
            if (event.target.value.length === 0) {
              setPostsToDisplay(allPosts);
            }
          }}
        ></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            if (searchTerm.length) {
              const lowercasedSearchTerm = searchTerm.toLowerCase();
              setPostsToDisplay(
                allPosts.filter((post) => {
                  return (
                    post.title.toLowerCase().includes(lowercasedSearchTerm) ||
                    post.description
                      .toLowerCase()
                      .includes(lowercasedSearchTerm)
                  );
                })
              );
            } else {
              setPostsToDisplay(allPosts);
            }
          }}
        >
          Search
        </button>
      </form>
      <div className="postsList">
        {postsToDisplay.map((el) => {
          return (
            <Post
              el={el}
              setFeaturedItem={props.setFeaturedItem}
              key={el._id}
              setCurrentUserIsAuthor={props.setCurrentUserIsAuthor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListPosts;
