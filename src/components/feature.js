import React from "react";
import { useHistory } from "react-router-dom";

const Feature = (props) => {
  console.log(props.featuredItem);
  const history = useHistory();
  
  return (
    <div className="container">
      <div className="subHeader">{props.featuredItem.title.toUpperCase()}</div>
      <ul>
      <li> <b>Description:</b>  {props.featuredItem.description}</li>
      <li> <b>Price:</b>  {props.featuredItem.price}</li>
      <li> <b>Location:</b>  {props.featuredItem.location}</li>
      <li> <b>Seller:</b>  {props.featuredItem.author.username}</li>
      </ul>
      <br/>
      
      <button
        onClick={(event) => {
          event.preventDefault();
          history.goBack();
        }}
      >
        Back to Posts
      </button>
    </div>
  );
};

export default Feature;
