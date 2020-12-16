import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import Modal from "./components/Modal";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "darkgrey", minHeight: "150vh" }}
    >
      <Router>
        <Switch>
          <NavRoute exact component={Home} path="/" />
          <NavRoute exact component={About} path="/About" />
          <NavRoute exact component={Projects} path="/Projects" />
          <NavRoute exact component={Blog} path="/Blog" />
          <NavRoute exact component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    )}
  />
);

export default App;
