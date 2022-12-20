import React from "react";

const MessageForm = () => {
    return (
        <div className="container">
            <div className="subHeader">Send Message To: username </div>
            <form className="messageForm">
                <input placeholder="Type message here..."className="messageInput"></input>
                <p><button>SEND</button></p>
            </form>
        </div>
    )
}

export default MessageForm;