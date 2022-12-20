import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { sendMessage } from "../api/api";

const MessageForm = (props) => {
  console.log("From Message Form " + props.featuredItem.author.username);

  const history = useHistory()
  const [messageContent, setMessageContent] = useState("")

  return (
    <div className="container">
      <div className="subHeader">
        Send Message To: {props.featuredItem.author.username}
      </div>
      <div>Subject: {props.featuredItem.title} </div> <br />
      <form className="messageForm" value={messageContent}>
        <input
          required
          placeholder="Type message here..."
          className="messageInput"
          onChange={(event)=>{
            event.preventDefault();
            console.log(event.target.value)
            setMessageContent(event.target.value);
          }}
        ></input>
        <p>
          <button onClick={async (event) => {
            event.preventDefault();
            await sendMessage(props.featuredItem._id, messageContent)
            setMessageContent("")
            history.goBack();
          }}>SEND</button>
        </p>
      </form>
    </div>
  );
};

export default MessageForm;
