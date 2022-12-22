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
  console.log(props.postToEdit);

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
            onClick={async (event) => {
              event.preventDefault();
              if (props.postToEdit) {
                await editPost(
                  props.postToEdit._id,
                  title,
                  description,
                  price,
                  location,
                  deliver
                );
              } else {
                await addPost(title, description, price, location, deliver);
              }
              setTitle("");
              setDescription("");
              setPrice("");
              setLocation("");
              setDeliver(false);
              props.setPostToEdit(null);
              history.goBack();
            }}
          >
            ENTER
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.setPostToEdit(null);
              history.goBack();
            }}
          >
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
