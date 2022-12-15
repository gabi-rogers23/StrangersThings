import { React } from "react";
import { NavLink } from "react-router-dom";

const App = () => {
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
        <NavLink to="/Login" activeClassName="topNavActive">
          LOG IN
        </NavLink>
        <NavLink to="/Posts" activeClassName="topNavActive">
          POSTS
        </NavLink>
      </nav>
    </header>
  );
};

export default App;
