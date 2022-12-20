import React from "react";

const Messages = (props) => {
    return (
        <div className="message">
        <ul>
        <li>{props.el.post.title}</li>    
        <li>From: {props.el.fromUser.username}</li>
        <li>{props.el.content}</li>
        </ul>
      </div>
    )
}

export default Messages;