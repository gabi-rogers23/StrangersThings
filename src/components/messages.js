import React from "react";
import { useHistory } from "react-router-dom";

const Messages = (props) => {
  const history = useHistory();
  console.log(props.el);
  return (
    <div className="postDescription">
      <span className="material-icons">email</span>
      <div>
        <ul>
          <li className="messageFrom">
            {props.currentUserIsAuthor
              ? "From: Me"
              : `From: ${props.el.fromUser.username}`}
          </li>
          <br />
          <li>Subject: {props.el.title}</li>
          <br />
          <li>{props.el.content}</li>
        </ul>
      </div>
    </div>
  );
};

export default Messages;
