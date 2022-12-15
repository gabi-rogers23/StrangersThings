import { React } from "react";
import { NavLink } from "react-router-dom";
import UserAccount from "./userAccount";

const App = (props) => {
  return (
    <header>
      <div className="logo">ST</div>
      <div className="centerHeader">
        <div className="title">STRANGER'S THINGS</div>
        <div className="tagline"> TRASH TO TREASURE</div>
      </div>
      <nav className="topNav">
        <NavLink exact to="/" activeClassName="topNavActive">
          HOME
        </NavLink>

        {props.isLoggedIn ? (
          <><NavLink to="/Login" activeClassName="topNavActive" onClick={()=>{
            console.log("Logged In " + props.isLoggedIn)
            props.setIsLoggedIn(false)
            console.log("Logged In after Log Out Click " + props.isLoggedIn)
          }}>
            LOG OUT
          </NavLink>

          <NavLink to ="/userAccount" activeClassName="topNavActive">
            USER ACCOUNT
          </NavLink></>
        ) : (
          <NavLink to="/Login" activeClassName="topNavActive">
            LOG IN
          </NavLink>
        )}

        <NavLink to="/Posts" activeClassName="topNavActive">
          POSTS
        </NavLink>
      </nav>
    </header>
  );
};

export default App;
