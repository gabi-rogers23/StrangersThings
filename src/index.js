import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Home, LogIn, ListPosts, Feature, Nav } from "./components/exports";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [featuredItem, setFeaturedItem] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/Posts">
              <ListPosts
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
