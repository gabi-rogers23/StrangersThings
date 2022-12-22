import React from "react";

const Messages = (props) => {
  console.log(props.el)
    return (
        <div className="message">
        <ul>
        <li className="messageFrom"> {props.currentUserIsAuthor ? "From: Me" : `From: ${props.el.fromUser.username}` }</li> <br/>
        <li>Subject:  {props.el.post.title}</li><br/>    
        <li>{props.el.content}</li>
        </ul>
       <button onClick={(event)=>{
        event.preventDefault()
        
       }}>Send Another Message</button>
      </div>
    )
}

export default Messages;