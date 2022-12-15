import React, { useState } from "react";
import {registerNewUser} from "../api/api"

const Register = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
    return (
        <div className="container">
            <br/>
            <div>CREATE AN ACCOUNT</div>
            <br/>
            <form>
                USERNAME: <input required value={username} onChange={(event)=>{
                    event.preventDefault();
                    console.log(event.target.value)
                    setUsername(event.target.value)
                }}></input>
                <br/>
                PASSWORD: <input required value={password} onChange={(event)=>{
                    event.preventDefault();
                    console.log(event.target.value)
                    setPassword(event.target.value)
                }}></input>
                <br/>
                <button  onClick={async (event) => {
                    event.preventDefault();
                    await registerNewUser(username, password)
                    setUsername("")
                    setPassword("")
                }}>Enter</button>
            </form>
        </div>
    )
}

export default Register;