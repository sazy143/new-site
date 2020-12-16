import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Modal from "./Modal";

let Navbar = (props) => {
  let [showModal, setShowModal] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="loginModal">
        <Modal
          text="test some really long text phrase that extends past eh outside border"
          showModal={showModal}
          component={LoginRegister}
          setShowModal={setShowModal}
        ></Modal>
      </div>
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          Zachary Bentsen
        </Link>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto ">
            <li className="px-1 nav-item">
              <Link className="nav-link js-scroll-trigger scroll-top" to="/">
                Home
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/Blog"
              >
                Blog
              </Link>
            </li>
            <li className="px-1 nav-item">
              <button
                className="nav-link js-scroll-trigger"
                onClick={() => {
                  setShowModal(true);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0!important",
                  outline: "none",
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
