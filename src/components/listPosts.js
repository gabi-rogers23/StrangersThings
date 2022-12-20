import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllPosts } from "../api/api";
import { Post } from "./exports";

const ListPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  function searchResults(allPosts, searchTerm) {
    if (allPosts.title.includes(searchTerm)) {
      return true;
    }
      // return true if any of the fields you want to check against include the text
      // strings have an .includes() method 
    
      }
    const filteredPosts = allPosts.filter(allPosts => postMatches(allPosts, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : allPosts;
    

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
        <input
          value={searchTerm}
          onChange={(event) => {
            event.preventDefault();
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        ></input>
        <button onClick={(event)=>{
          event.preventDefault()
          searchResults(allPosts, searchTerm);
        }}>
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
