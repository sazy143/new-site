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
  let [showLogin, setShowLogin] = useState(false);

  return (
    <div
      className="App"
      style={{ backgroundColor: "darkgrey", minHeight: "100vh" }}
    >
      <Modal
        text="test modal"
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      ></Modal>
      <Router>
        <Switch>
          <NavRoute
            exact
            component={Home}
            path="/"
            setShowLogin={setShowLogin}
          />
          <NavRoute
            exact
            component={About}
            path="/About"
            setShowLogin={setShowLogin}
          />
          <NavRoute
            exact
            component={Projects}
            path="/Projects"
            setShowLogin={setShowLogin}
          />
          <NavRoute
            exact
            component={Blog}
            path="/Blog"
            setShowLogin={setShowLogin}
          />
          <NavRoute exact component={Page404} setShowLogin={setShowLogin} />
        </Switch>
      </Router>
    </div>
  );
}

const NavRoute = ({ exact, path, setShowLogin, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Component {...props} />
      </div>
    )}
  />
);

export default App;
