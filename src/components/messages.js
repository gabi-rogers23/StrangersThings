import React from "react";
import { useHistory } from "react-router-dom";

const Messages = (props) => {
  const history = useHistory()
  console.log(props.el)
    return (
        <div className="message">
        <ul>
        <li className="messageFrom"> {props.currentUserIsAuthor ? "From: Me" : `From: ${props.el.fromUser.username}` }</li> <br/>
        <li>Subject:  {props.el.post.title}</li><br/>    
        <li>{props.el.content}</li>
        </ul>
      </div>
    )
}

export default Messages;