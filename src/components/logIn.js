import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const LogIn = () => {
    return (
        <div>
            Log In!
            <form>
                <div>Username:<input></input></div>
                <div>Password:<input></input></div>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default LogIn;