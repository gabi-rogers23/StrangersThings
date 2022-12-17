import React from "react";
import { useHistory } from "react-router-dom";

const Feature = (props) => {
  console.log(props.featuredItem);
  const history = useHistory();
  
  return (
    <div>
      <h3>{props.featuredItem.title}</h3>
      <div>Description:  {props.featuredItem.description}</div>
      <div>Price:  {props.featuredItem.price}</div>
      <div>Location:  {props.featuredItem.location}</div>
      <div>Seller:  {props.featuredItem.author.username}</div>
      <br/>
      
      <button
        onClick={(event) => {
          event.preventDefault();
          history.push("/Posts");
        }}
      >
        Back to Posts
      </button>
    </div>
  );
};

export default Feature;
