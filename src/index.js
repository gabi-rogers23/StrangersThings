import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Home, LogIn, Posts, Feature } from "./components/exports";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const App = () => {
  const [featuredItem, setFeaturedItem] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <header>
          <div className="logo">ST</div>
          <div className="centerHeader">
          <div className="title">
            STRANGER'S THINGS</div>
            <div className="tagline"> TRASH   TO   TREASURE</div>
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
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/Posts">
              <Posts
                featuredItem={featuredItem}
                setFeaturedItem={setFeaturedItem}
              />
            </Route>
            <Route path="/FeaturedPost">
              <Feature featuredItem={featuredItem} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
