import react, { useState } from "react";
import { addPost } from "../api/api";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  return (
    <div className="container">
      <div className="subHeader">New Post</div>
      <form className="newPostForm">
        TITLE:{" "}
        <input
          required
          value={title}
          onChange={(event) => {
            event.preventDefault();
            setTitle(event.target.value);
          }}
        ></input>
        <p />
        DESCRIPTION:{" "}
        <input
          required
          value={description}
          onChange={(event) => {
            event.preventDefault();
            setDescription(event.target.value);
          }}
        ></input>
        <p />
        PRICE:{" "}
        <input
          required
          value={price}
          onChange={(event) => {
            event.preventDefault();
            setPrice(event.target.value);
          }}
        ></input>
        <p />
        LOCATION:{" "}
        <input
          value={location}
          onChange={(event) => {
            event.preventDefault();
            setLocation(event.target.value);
          }}
        ></input>{" "}
        <p />
        <label htmlFor="willDeliver">DELIVER: </label>
        <input
          type="checkbox"
          checked={deliver}
          name="willDeliver"
          onChange={(event) => {
            setDeliver(event.target.checked);
            console.log(event.target.checked);
          }}
        ></input>
        <p />
        <button
          onClick={async (event) => {
            event.preventDefault();
            await addPost(title, description, price, location, deliver);
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
            setDeliver(false);
          }}
        >
          ENTER
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
