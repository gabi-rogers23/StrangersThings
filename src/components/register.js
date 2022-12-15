import React from "react";
import {registerNewUser} from "../api/api"

const Register = (props) => {

    return (
        <div className="container">
            <br/>
            <div>CREATE AN ACCOUNT</div>
            <br/>
            <form>
                USERNAME: <input required value={props.username} onChange={(event)=>{
                    event.preventDefault();
                    console.log("register Username " + event.target.value)
                    props.setUsername(event.target.value)
                }}></input>
                <br/>
                PASSWORD: <input required value={props.password} onChange={(event)=>{
                    event.preventDefault();
                    console.log("register Password " + event.target.value)
                    props.setPassword(event.target.value)
                }}></input>
                <br/>
                <button  onClick={async (event) => {
                    event.preventDefault();
                    await registerNewUser(props.username, props.password)
                    props.setUsername("")
                    props.setPassword("")
                }}>Enter</button>
            </form>
        </div>
    )
}

export default Register;