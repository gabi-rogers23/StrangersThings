import { React, useState } from "react";
import ReactDOM from "react-dom";
import {
  Home,
  LogIn,
  ListPosts,
  Feature,
  Nav,
  Register,
  Profile,
  NewPostForm,
} from "./components/exports";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [featuredItem, setFeaturedItem] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth_token")
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/logIn">
              <LogIn
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route path="/posts">
              <ListPosts
                featuredItem={featuredItem}
                setFeaturedItem={setFeaturedItem}
              />
            </Route>
            <Route path="/featuredPost">
              <Feature featuredItem={featuredItem} />
            </Route>
            <Route path="/register">
              <Register
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route path="/profile">
              <Profile setFeaturedItem={setFeaturedItem} />
            </Route>
            <Route path="/newPostForm">
              <NewPostForm />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
