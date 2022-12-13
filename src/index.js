import { React } from "react";
import ReactDOM from "react-dom";
import { Home, LogIn, Posts, Feature } from "./components/exports";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <header>
        <h1>Stranger's Things!</h1>
          <nav className = 'topNav'>
            <NavLink exact to="/" activeClassName="topNavActive">Home</NavLink>
            <NavLink to="/Login" activeClassName="topNavActive">Log In</NavLink>
            <NavLink to="/Posts" activeClassName="topNavActive">Posts</NavLink>
          </nav>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route  path="/LogIn">
                <LogIn />
              </Route>
              <Route  path="/Posts">
                <Posts />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
