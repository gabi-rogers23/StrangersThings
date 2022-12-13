import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Posts, Home, LogIn } from "./exports";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink exact to="/" activeClassName="topNavActive">Home</NavLink>
        <NavLink to="/Login" activeClassName="topNavActive">Log In</NavLink>
        <NavLink to="/Posts" activeClassName="topNavActive">Posts</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
        </Switch>
     
    </BrowserRouter>
  );
};

export default Nav;
