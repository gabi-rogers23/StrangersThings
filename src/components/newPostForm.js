import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addPost, editPost } from "../api/api";

const NewPostForm = (props) => {
  const [title, setTitle] = useState(
    props.postToEdit ? props.postToEdit.title : ""
  );
  const [description, setDescription] = useState(
    props.postToEdit ? props.postToEdit.description : ""
  );
  const [price, setPrice] = useState(
    props.postToEdit ? props.postToEdit.price : ""
  );
  const [location, setLocation] = useState(
    props.postToEdit ? props.postToEdit.location : ""
  );
  const [deliver, setDeliver] = useState(
    props.postToEdit ? props.postToEdit.willDeliver : false
  );

  const history = useHistory();

  return (
    <div className="container">
      <div className="subHeader">New Post</div>
      <form className="newPostForm">
        TITLE:
        <input
          required
          value={title}
          onChange={(event) => {
            event.preventDefault();
            setTitle(event.target.value);
          }}
        ></input>
        <p />
        DESCRIPTION:
        <input
          required
          value={description}
          onChange={(event) => {
            event.preventDefault();
            setDescription(event.target.value);
          }}
        ></input>
        <p />
        PRICE:
        <input
          required
          value={price}
          onChange={(event) => {
            event.preventDefault();
            setPrice(event.target.value);
          }}
        ></input>
        <p />
        LOCATION:
        <input
          value={location}
          onChange={(event) => {
            event.preventDefault();
            setLocation(event.target.value);
          }}
        ></input>
        <p />
        <label htmlFor="willDeliver">WILL DELIVER: </label>
        <input
          type="checkbox"
          checked={deliver}
          name="willDeliver"
          onChange={(event) => {
            setDeliver(event.target.checked);
            console.log(event.target.checked);
          }}
        ></input>
        <div className="newPostButtons">
          <button
            className="featureBtn"
            onClick={async (event) => {
              event.preventDefault();
              if (props.postToEdit) {
                const post = await editPost(
                  props.postToEdit._id,
                  title,
                  description,
                  price,
                  location,
                  deliver
                );
                props.setFeaturedItem(post);
              } else {
                await addPost(title, description, price, location, deliver);
              }
              setTitle("");
              setDescription("");
              setPrice("");
              setLocation("");
              setDeliver(false);
              history.goBack();
            }}
          >
            <span className="material-icons">check</span>ENTER
          </button>
          <button
            className="featureBtn"
            onClick={(event) => {
              event.preventDefault();
              history.goBack();
            }}
          >
            <span className="material-icons">arrow_back</span>BACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
